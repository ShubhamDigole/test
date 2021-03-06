import { model, Schema } from "mongoose";

const userSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: String,
    email: String,
    username: {
        type: String,
       
    },
    password: {
        type: String,
        required: true
    },
    post: String,
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: Boolean
});

module.exports = model('user', userSchema, 'users');  