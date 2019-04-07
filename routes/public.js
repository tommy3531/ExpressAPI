const express = require('express');

const publicController = require('../controller/public');
const validation = require('../helper/validation').validate;
const router = express.Router();

router.get('/home', publicController.home);

module.exports = router;