const express = require('express');
const authRouter = express.Router();
const {registerUser, loginUser, profile} = require('../controllers/authControllers.js');
const accessTokenMiddleware = require('../middlewares/authMiddlewares.js');

authRouter.post("/register",registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/profile", accessTokenMiddleware, profile)

module.exports = authRouter;