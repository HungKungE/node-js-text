"use strict";

const express = require('express');
var cors = require('cors');
const app = express();

// app 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(cors())

app.use(express.static(`${__dirname}/src/public`))

const home = require('./src/routes/home');
app.use("/", home);

module.exports = app;