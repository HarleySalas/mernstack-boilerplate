'use strict'

const express = require('express');
const router = express.Router();
const user = require('../src/user');

router.get('/show', user.showUser);

module.exports = router;