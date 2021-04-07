const express = require('express');
const dotenv = require("dotenv");

// Load Dotenv
dotenv.config({ path: "./config/.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is Running on Port 
    on ${process.env.PORT} on ${process.env.NODE_ENV} mode`
  )
);

// Routes Files
const hotels = require("./routes/hotels");


// Mount router

app.use("/api/v1/hotels", hotels);