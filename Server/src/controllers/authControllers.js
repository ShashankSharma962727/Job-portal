const crypto = require("crypto");
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const sessionModel = require("../models/session.js");

// User register controller
const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    if (!firstname || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required!" });
    }

    const allowedRole = ["candidate", "recruiter"];

    if (!allowedRole.includes(role)) {
      return res.status(400).json({ message: "Invalid Role" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already registered, please login." });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = await userModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      role: role,
    });

    return res
      .status(201)
      .json({ message: "User registered successfull!", userid: user._id });
  } catch (error) {
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

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid email or password!" });
    }
    
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    if(hashedPassword !== user.password){
      return res.status(404).json({ message: "Invalid email or password!" });
    }

    const refreshToken = jwt.sign(
      {
        role: user.role,
        userid: user._id,
      },
      process.env.refreshTokenSecretKey,
      {
        expiresIn: "7d",
      },
    );

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

    const session = await sessionModel.create({
      userid: user._id,
      refreshTokenHash,
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    res.cookie("refresh-token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    const accessToken = jwt.sign(
      {
        role: user.role,
        userid: user._id,
      },
      process.env.accessTokenSecretKey,
      {
        expiresIn: "15m",
      },
    );

    return res.status(200).json({
      message: "Login successfull",
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const generateNewToken = async (req, res) => {
  try {
    const refreshToken = req.cookies["refresh-token"];

    if (!refreshToken) {
      return res.status(404).json({ message: "Refresh token required!" });
    }

    const decodeRefreshToken = jwt.verify(
      refreshToken,
      process.env.refreshTokenSecretKey,
    );

    if (!decodeRefreshToken) {
      return res.status(404).json({ message: "Refresh token required!" });
    }

    const user = await userModel.findById(decodeRefreshToken.userid);

    if(!user){
      return res.status(404).json({
        message: "User not found!"
      })
    }
    
    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

    const session = await sessionModel.findOne({
      refreshTokenHash,
      revoke: false
    })

    if(!session){
      return res.status(404).json({
        message: "Invalid refresh token!"
      })
    }

    const newAccessToken = jwt.sign(
      {
        role: user.role,
        userid: user._id,
      },
      process.env.accessTokenSecretKey,
      {
        expiresIn: "15m",
      },
    );

    const newRefreshToken = jwt.sign(
      {
        role: user.role,
        userid: user._id,
      },
      process.env.refreshTokenSecretKey,
      {
        expiresIn: "7d",
      },
    );

    const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex");

    session.refreshTokenHash = newRefreshTokenHash;
    await session.save();

    res.cookie("refresh-token", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).json({
      message: "New access token generated",
      newAccessToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const profile = (req, res) => {
  try {
    const user = req.user;

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const logout = async (req,res) => {
  try {
    const refreshToken = req.cookies["refresh-token"];

    if(!refreshToken){
      return res.status(404).json({
        message: "Refresh Token not found!"
      })
    }

    const decodeRefreshToken = jwt.verify(refreshToken, process.env.refreshTokenSecretKey);

    const session = await sessionModel.findOneAndUpdate({
      userid: decodeRefreshToken.userid,
      revoke: false
    },{
      revoke: true
    });

    if(!session){
      return res.status(404).json({
        message: "Invalid session!"
      })
    }

    res.clearCookie("refresh-token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Logout successfully!"
    });

  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
}
module.exports = { registerUser, loginUser, profile, generateNewToken, logout};
