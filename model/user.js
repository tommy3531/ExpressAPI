const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true
    },
    birthday: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
});