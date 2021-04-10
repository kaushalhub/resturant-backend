const express = require('express');
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
var bodyParser = require("body-parser");

console.log(errorHandler);

// Load Dotenv
dotenv.config({ path: "./config/.env" });

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Routes Files
const hotels = require("./routes/hotels");

// Mount router
app.use("/api/v1/hotels", hotels);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is Running on Port 
    on ${process.env.PORT} on ${process.env.NODE_ENV} mode`
  )
);

connectDB();


