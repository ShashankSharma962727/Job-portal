
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const uri = process.env.mongoURI;

    if (!uri) {
      throw new Error("mongoURI environment variable is missing");
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected:", mongoose.connection.host);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    throw error;
  }
};

module.exports = dbConnection;