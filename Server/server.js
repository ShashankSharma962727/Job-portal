
const app = require("./src/app.js");
const dbConnection = require("./src/config/db.js");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await dbConnection();

    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();