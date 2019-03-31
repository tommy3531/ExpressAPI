const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/login', userController.loginUser)
router.post('/register', userController.registerUser)


module.exports = router;