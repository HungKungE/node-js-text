"use strict";

const express = require('express');
var cors = require('cors');
const app = express();

// app 세팅
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cors())

const home = require('./routes/home');
app.use("/", home);

app.get('/', (req, res) => {
    res.render('home/index');
})

app.get('/login', (req, res) => {
    res.render('home/login');
})

module.exports = app;