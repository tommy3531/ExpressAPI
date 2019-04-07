const bcrypt = require('bcryptjs');
const User = require('../model/user');

exports.postSignup = (req, res, next) => {
    console.log("POSTSIGNUP: " + req.body.username)
    console.log("PASSWORD: " + req.body.password);
    console.log("EMAIL: " + req.body.email);

    // const { errors, isValid} = validateRegisterInput(req.body);

    // if(!isValid){
    //     return res.status(400).json({"errors: ": errors});
    // }
    User.findOne({ email: req.body.email }).then(user => {
        if(user){
            return res.status(400).json({email: "Email already exists"});
        } else {
            console.log("User: " + user);
            const username = req.body.username;
            const password = req.body.passwordOne;
            const email = req.body.email;

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
                bcrypt.compare(req.body.password, value.password).then(isMatch => {
                    if(isMatch){
                        console.log("MATCH");
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


