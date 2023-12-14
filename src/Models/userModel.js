// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password') || user.isNew) {
        try {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
        } catch (error) {
            return next(error);
        }
    }
    return next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;