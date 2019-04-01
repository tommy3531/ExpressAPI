const express = require('express');
const { body } = require('express-validator/check');

const authController = require('../controller/auth');
const router = express.Router();

router.post('/register', [
    body('username').trim().isLength({min: 5})
],authController.registerUser);
router.get('/login', authController.loginUser);

module.exports = router;