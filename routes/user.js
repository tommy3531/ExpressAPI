const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Login')
});

router.post('/register', (req, res) => {
    console.log(req.body.username);

    res.send("Register")
});

module.exports = router;