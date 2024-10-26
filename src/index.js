// METHOD 2 CONNECTION

import express from "express";
import connectDB from "./db/index.js";
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`MONGODB CONNECTED !! ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB NOT CONNECTED ERROR");
  });

// ===========================================================================

/*
// METHOD 1 to connect with mongo db

import dotenv from "dotenv";
const app = express();
dotenv.config({
  path: "./env",
});

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

// method 1 : to connect to DB
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // express check if able to listen
    app.on("error", () => {
      console.log("ERR", error);
      throw error;
    });

    //express listening
    app.listen(process.env.PORT, () => {
      console.log(`SERVER LISTENING ON ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("ERROR", err);
  }
})();
*/
