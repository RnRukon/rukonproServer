const jwt = require('jsonwebtoken');

exports.tokenGenerator = (optons) => {
    return jwt.sign(optons, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
}