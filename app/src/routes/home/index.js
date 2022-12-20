"use strict";

const express = require('express');
var cors = require('cors');
const router = express.Router();

// app 세팅
router.use(cors())

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login)
router.post("/login", ctrl.process.login);

module.exports = router;