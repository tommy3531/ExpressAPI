exports.loginUser = (req, res, next) => {
    res.status(200).json({
        posts:[{title: "Login User", content: 'This should be the login user information'}]
    });

};

exports.registerUser = (req, res, next) => {
    const username = req.body.username;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phone = req.body.phone;
    const birthday = req.body.birthday;
    const password = req.body.password;
    const userProfile = { username, fullname, email, phone, birthday}
    res.status(201).json({
        registerMessage: 'User Registered',
        registerUserData: { id: new Date().toISOString(), userProfile: userProfile }
    });
};