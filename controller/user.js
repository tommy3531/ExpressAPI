const flash = require('express-flash');
const { check, validationResult } = require('express-validator/check');

exports.postSignup = (req, res, next) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const username = req.body.username;
        // const fullname = req.body.fullname;
        const email = req.body.email;
        // const phone = req.body.phone;
        // const birthday = req.body.birthday;
    
        const userProfile = { username, email};
        res.status(201).json({
            registerMessage: 'User Registered',
            registerUserData: { id: new Date().toISOString(), userProfile: userProfile }
        });
        return next();
    }

    return res.status(422).json({ errors: errors.array() });





};

exports.loginUser = (req, res, next) => {
    res.status(200).json({
        posts:[{title: "Login User", content: 'This should be the login user information'}]
    });
};
