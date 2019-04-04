const { check } = require('express-validator/check');


exports.validate = (method) => {
    switch(method) {
        case 'signUpForm': {
            return [
                check('email', 'Email cant be blank').isEmail(),
                check('phone', 'Phone must be int').isInt()
            ]
        }
    }
}