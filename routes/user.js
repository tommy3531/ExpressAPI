const express = require('express');

const userController = require('../controller/user');
const router = express.Router();

router.post('/register', userController.validate('signUpForm'),userController.postSignup);
router.get('/login', userController.loginUser);

module.exports = router;