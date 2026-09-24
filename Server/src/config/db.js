const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.mongoURI)
    .then(() => console.log("Mongo DB Connected"))
    .catch((error) => console.log(error));
};

module.exports = dbConnection;