const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const sessionModel = require("../models/session.js");

const ACCESS_TOKEN_MAX_AGE = 1000 * 60 * 15;
const REFRESH_TOKEN_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

const cookieOptions = {
  httpOnly: true,
  secure: process.env.COOKIE_SECURE === "true",
  sameSite: process.env.COOKIE_SAME_SITE || "strict",
  path: "/",
};

const setAuthCookies = (res, accessToken, refreshToken) => {
  res.cookie("access-token", accessToken, {
    ...cookieOptions,
    maxAge: ACCESS_TOKEN_MAX_AGE,
  });

  res.cookie("refresh-token", refreshToken, {
    ...cookieOptions,
    maxAge: REFRESH_TOKEN_MAX_AGE,
  });
};

const clearAuthCookies = (res) => {
  res.clearCookie("access-token", cookieOptions);
  res.clearCookie("refresh-token", cookieOptions);
};

const createAccessToken = (user, sessionId) =>
  jwt.sign(
    {
      role: user.role,
      userid: user._id,
      sid: sessionId,
    },
    process.env.accessTokenSecretKey,
    { expiresIn: "15m" },
  );

const createRefreshToken = (user, sessionId) =>
  jwt.sign(
    {
      role: user.role,
      userid: user._id,
      sid: sessionId,
    },
    process.env.refreshTokenSecretKey,
    { expiresIn: "7d" },
  );

// User register controller
const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    if (!firstname || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long.",
      });
    }

    const allowedRole = ["candidate", "recruiter"];

    if (!allowedRole.includes(role)) {
      return res.status(400).json({ message: "Invalid Role" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await userModel.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already registered, please login." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await userModel.create({
      firstname: firstname.trim(),
      lastname: lastname?.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      role,
    });

    return res
      .status(201)
      .json({ message: "User registered successfully!", userid: user._id });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// User login controller
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const user = await userModel.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    let passwordValid = false;

    // Existing accounts used SHA-256. Verify them once and transparently
    // migrate the password to bcrypt without changing the login flow.
    if (user.password.startsWith("$2")) {
      passwordValid = await bcrypt.compare(password, user.password);
    } else {
      const legacyHash = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");

      passwordValid = legacyHash === user.password;

      if (passwordValid) {
        user.password = await bcrypt.hash(password, 12);
        await user.save();
      }
    }

    if (!passwordValid) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    const session = await sessionModel.create({
      userid: user._id,
      refreshTokenHash: "pending",
      ip: req.ip,
      userAgent: req.headers["user-agent"] || "unknown",
      expiresAt: new Date(Date.now() + REFRESH_TOKEN_MAX_AGE),
    });

    const sessionId = session._id.toString();
    const refreshToken = createRefreshToken(user, sessionId);
    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    session.refreshTokenHash = refreshTokenHash;
    await session.save();

    const accessToken = createAccessToken(user, sessionId);

    setAuthCookies(res, accessToken, refreshToken);

    return res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const generateNewToken = async (req, res) => {
  try {
    const refreshToken = req.cookies["refresh-token"];

    if (!refreshToken) {
      clearAuthCookies(res);
      return res.status(401).json({ message: "Refresh token required!" });
    }

    const decodedRefreshToken = jwt.verify(
      refreshToken,
      process.env.refreshTokenSecretKey,
    );

    if (!decodedRefreshToken?.sid || !decodedRefreshToken?.userid) {
      clearAuthCookies(res);
      return res.status(401).json({ message: "Invalid refresh token!" });
    }

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    const session = await sessionModel.findOne({
      _id: decodedRefreshToken.sid,
      userid: decodedRefreshToken.userid,
      refreshTokenHash,
      revoke: false,
      expiresAt: { $gt: new Date() },
    });

    if (!session) {
      clearAuthCookies(res);
      return res.status(401).json({ message: "Invalid session!" });
    }

    const user = await userModel.findById(decodedRefreshToken.userid);

    if (!user) {
      session.revoke = true;
      await session.save();
      clearAuthCookies(res);
      return res.status(401).json({ message: "User not found!" });
    }

    const sessionId = session._id.toString();
    const newAccessToken = createAccessToken(user, sessionId);
    const newRefreshToken = createRefreshToken(user, sessionId);

    session.refreshTokenHash = crypto
      .createHash("sha256")
      .update(newRefreshToken)
      .digest("hex");
    session.expiresAt = new Date(Date.now() + REFRESH_TOKEN_MAX_AGE);
    await session.save();

    setAuthCookies(res, newAccessToken, newRefreshToken);

    return res.status(200).json({
      message: "New access token generated",
    });
  } catch (error) {
    clearAuthCookies(res);

    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError"
    ) {
      return res.status(401).json({ message: "Invalid or expired session!" });
    }

    console.error("Refresh token error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const profile = async (req, res) => {
  try {
    const userdata = await userModel
      .findById(req.user.userid)
      .select("-password");

    if (!userdata) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.status(200).json(userdata);
  } catch (error) {
    console.error("Profile error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies["refresh-token"];

    if (!refreshToken) {
      clearAuthCookies(res);
      return res.status(200).json({ message: "Logout successful!" });
    }

    let decodedRefreshToken;

    try {
      decodedRefreshToken = jwt.verify(
        refreshToken,
        process.env.refreshTokenSecretKey,
      );
    } catch (error) {
      clearAuthCookies(res);
      return res.status(200).json({ message: "Logout successful!" });
    }

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // Revoke only the exact session represented by the current refresh token.
    await sessionModel.findOneAndUpdate(
      {
        _id: decodedRefreshToken.sid,
        userid: decodedRefreshToken.userid,
        refreshTokenHash,
      },
      {
        $set: {
          revoke: true,
        },
      },
    );

    clearAuthCookies(res);

    return res.status(200).json({
      message: "Logout successful!",
    });
  } catch (error) {
    console.error("Logout error:", error);
    clearAuthCookies(res);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  profile,
  generateNewToken,
  logout,
};
