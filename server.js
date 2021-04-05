const express = require('express');
const dotenv = require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.send('Its Our First API');
})

app.listen(PORT, (req, res) => {
    console.log(`Server is Running on PORT ${PORT}`)
})