const app = require("./app");

const connectDatabase = require("./config/database");

//config
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  process.exit(1);
});

//connecting to database
connectDatabase();

//create a server
const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on localhost ${process.env.PORT}`);
});

//unhandled promise error
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
