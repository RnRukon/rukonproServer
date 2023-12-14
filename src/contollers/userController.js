const bcrypt = require('bcrypt');


const User = require("../Models/userModel");
const { tokenGanaretor } = require('../helpers/tokenGanaret');





exports.userRegisterContoller = async ({ username, email, password }) => {
    try {
        const user = new User({ username, email, password });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Registration failed');
    }
}


exports.userLoginContoller = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        const passwordMatch = await bcrypt.compare(password, user?.password);

        if (!passwordMatch) {
            throw new Error('Incorrect password');
        };
        const optons = { userId: user._id, email: user.email, username: user.username };
        const token = tokenGanaretor(optons);
        return { user, token };
    } catch (error) {
        throw new Error(error);
    }
}

exports.getMeContoller = async (args, req) => {

    try {
        
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        const user = await User.findOne(req._id);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error(error);
    }
}