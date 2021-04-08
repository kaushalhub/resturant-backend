const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
var bodyParser = require("body-parser");
// Load Dotenv
dotenv.config({ path: "./config/.env" });

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is Running on Port 
    on ${process.env.PORT} on ${process.env.NODE_ENV} mode`
  )
);

connectDB();



// Routes Files
const hotels = require("./routes/hotels");


// Mount router

app.use("/api/v1/hotels", hotels);