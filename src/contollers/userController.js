const bcrypt = require('bcrypt');


const User = require("../Models/userModel");
const { tokenGenerator } = require('../helpers/tokenGanaret');


exports.userRegisterController = async ({ username, email, password }) => {
    try {
        const user = new User({ username, email, password });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Registration failed');
    }
}


exports.userLoginController = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
                    if (!user) {
                        return  new Error('User not found');
                    }

        const passwordMatch = await bcrypt.compare(password, user?.password);

        if (!passwordMatch) {
            return  new Error('Incorrect password');
        }
        const options = { userId: user._id, email: user.email, username: user.username };
        const token = tokenGenerator(options);
        return { user, token };
    } catch (error) {
        throw new Error(error);
    }
}

exports.getMeController = async (args, req) => {

    try {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        const user = await User.findOne({_id:req._id});

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error(error);
    }
}