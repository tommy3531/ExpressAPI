const express = require('express');

const authController = require('../controller/auth');

const router = express.Router();

router.get('/profile', authController.getProfile);

router.get('/member', authController.getMember);

module.exports = router;