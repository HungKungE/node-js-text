"use strict";

const express = require('express');
var cors = require('cors');
const router = express.Router();

// app 세팅
router.use(cors())

const ctrl = require("./home.ctrl");

router.get('/', ctrl.home);

router.get('/login', ctrl.login)

module.exports = router;