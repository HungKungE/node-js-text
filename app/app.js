"use strict";

const express = require('express');
var cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// app 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(cors());

app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const home = require('./src/routes/home');
app.use("/", home);

module.exports = app;