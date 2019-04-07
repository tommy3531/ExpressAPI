const express = require('express');

const userController = require('../controller/user');
const router = express.Router();

router.get('/register', userController.getRegister);
router.post('/postRegister',userController.postSignup);
router.post('/postLogin', userController.loginUser);

module.exports = router;