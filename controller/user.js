const bcrypt = require('bcryptjs');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

exports.postSignup = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(user => {
        if(user){
            return res.status(400).json({email: "Email already exists"});
        } else {
            console.log("User: " + user);

            const newuser = new User();
            newuser.password = req.body.password;
            newuser.email = req.body.email;


            newuser
            .save()
            .then(userData => {
                console.log("USER JSON: " + res.json(userData.password))
            })
            .catch(err => console.log(err));
                    
        }
    });

};

exports.loginUser = (req, res, next) => {
    console.log("EMAIL: " + req.body.email);
    console.log("PASSWORD: " + req.body.password);

    User.find({ email: req.body.email })
        .then(user => {
            user.forEach(function(value){
                console.log("ELEMENT: " + value.email);
                // TODO: FIX THIS SHOULD use user.comparePassword
                bcrypt.compare(req.body.password, value.password).then(isMatch => {
                    if(isMatch){
                        const token = jwt.sign({
                            _id: user._id
                        }, process.env.SESSION_SECRET)
                        user.jwt = token;
                        console.log("USER: " + user);

                        res.cookie("growthDragonToken", token, {
                            expire: new Date() + 999
                        })
                        return res.status(200).json({success: "MATCH", token});
                    } else {
                        console.log("NO MATCH");
                    }
                }).catch(err => console.log(err));
            })
        })
        .catch(err => console.log(err));
};

exports.getRegister = (req, res, next) => {
    res.render('register');
};


