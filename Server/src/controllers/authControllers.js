const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");

// User register controller
const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    if (!firstname || !email || !password || !role) {
      return res
        .status(400)
        .json({ MIDIAccessessage: "All fields are required!" });
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

    const hashedPassword = await bcrypt.hash(password, 10);

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

    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword) {
      return res.status(404).json({ message: "Invalid email or password!" });
    }

    const accessToken = jwt.sign(
      {
        role: user.role,
        userid: user._id,
      },
      process.env.accessTokenSecretKey,
      {
        expiresIn: "15m",
      }
    );

    const refreshToken = jwt.sign(
      {
        role: user.role,
        userid: user._id,
      },
      process.env.refreshTokenSecretKey,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).json({
        message:"Login successfull",
        accessToken
    })
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const profile = (req, res) => {
    try {
        const user = req.user;

        return res.status(200).json(user)
    } catch (error){
        return res.status(500).json({ message: "Server Error" });
    }
}
module.exports = { registerUser, loginUser, profile };
