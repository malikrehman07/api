const mongoose = require('mongoose');
require('dotenv').config();
const { Schema, model } = mongoose;

const schema = new Schema({
    uid: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const Users = model('users', schema);

module.exports = Users;