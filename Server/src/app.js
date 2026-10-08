const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const cookieParser = require("cookie-parser");
const jobRouter = require("./routes/jobRoutes");
const applicationRouter = require("./routes/applicationRouter");
require("dotenv").config();

const app = express();

const frontendOrigin = process.env.FRONTEND_URL || "https://job-portal-69bh.onrender.com/";

// Middleware
app.use(
  cors({
    origin: frontendOrigin,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router.
app.use("/auth", authRouter);
app.use("/jobs", jobRouter);
app.use("/application", applicationRouter);

module.exports = app;
