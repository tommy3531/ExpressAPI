const flash = require('express-flash');
const { check, validationResult } = require('express-validator/check');

exports.home = (req, res, next) => {
    res.render('home');
};
