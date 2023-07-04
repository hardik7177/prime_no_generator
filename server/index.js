import express from "express";
import mongoose from "mongoose";
import Routers from "./routes/ApiRoutes.js";
import { config } from "dotenv";
const server = express();

config({
  path: "./config.env",
});

// Middleware
server.use(express.json());

server.use(Routers);


// connecting Database.

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(process.env.PORT, () => {
  console.log("server is running");
});
