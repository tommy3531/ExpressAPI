const express = require('express');

const userController = require('../controller/user');
const validation = require('../helper/validation').validate;
const router = express.Router();

router.post('/register', validation('signUpForm'),userController.postSignup);
router.get('/login', userController.loginUser);

module.exports = router;