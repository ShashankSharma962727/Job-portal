const jwt = require("jsonwebtoken");
const sessionModel = require("../models/session");

const accessTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies["access-token"];

    if (!token) {
      return res.status(401).json({ message: "Authentication required!" });
    }

    const decoded = jwt.verify(token, process.env.accessTokenSecretKey);

    if (!decoded?.sid || !decoded?.userid) {
      return res.status(401).json({ message: "Invalid authentication session!" });
    }

    const session = await sessionModel.findOne({
      _id: decoded.sid,
      userid: decoded.userid,
      revoke: false,
      expiresAt: { $gt: new Date() },
    }).select("_id");

    if (!session) {
      return res.status(401).json({ message: "Session expired or revoked!" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError"
    ) {
      return res.status(401).json({ message: "Invalid or expired session!" });
    }

    console.error("Authentication middleware error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = accessTokenMiddleware;
