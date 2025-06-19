require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URL;


const app = express();



app.listen(PORT,()=>{
    console.log("App Started");
    mongoose.connect(URI);
    console.log("mppngose commnected")
})