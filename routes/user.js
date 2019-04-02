const express = require('express');
const { body } = require('express-validator/check');

const userController = require('../controller/user');
const router = express.Router();

router.post('/register',userController.postSignup);
router.get('/login', userController.loginUser);

module.exports = router;