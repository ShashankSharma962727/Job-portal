const express = require("express");
const authRouter = express.Router();
const {
  registerUser,
  loginUser,
  profile,
  generateNewToken,
  logout,
} = require("../controllers/authControllers.js");
const accessTokenMiddleware = require("../middlewares/authMiddlewares.js");

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/profile", accessTokenMiddleware, profile);
authRouter.get("/refresh-token", generateNewToken);
authRouter.get("/logout", logout);
authRouter.post("/logout", logout);

module.exports = authRouter;
