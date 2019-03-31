const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => res.send("Home"));
router.get('/contactUs', (req, res) => res.send("Contact Us"));
router.get('/aboutUs', (req, res) => res.send("About Us"));

router.get('/');

module.exports = router;