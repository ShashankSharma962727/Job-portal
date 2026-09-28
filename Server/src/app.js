const express = require('express');
const cors = require("cors");
const authRouter = require('./routes/authRouter');
const cookieParser = require('cookie-parser');
const jobRouter = require('./routes/jobRoutes');
require("dotenv").config();

const app = express();

// Middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router.
app.use("/auth", authRouter);
app.use("/jobs", jobRouter);

module.exports = app;