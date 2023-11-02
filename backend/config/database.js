const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "../backend/config/config.env" });

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
