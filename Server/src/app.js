const express = require('express');
const cors = require("cors");
const authRouter = require('./routes/authRouter');
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router.
app.use("/auth", authRouter);

module.exports = app;