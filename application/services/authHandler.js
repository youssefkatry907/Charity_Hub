const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.generateToken = (data, expiresIn) => {
    if (expiresIn && typeof expiresIn !== 'number') {
        throw new Error('expiresIn must be a number');
    }
    const value = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: expiresIn ? `${expiresIn}d` : "30d",
    });
    const token = {
        value: value,
        expiresIn: expiresIn ? `${expiresIn}d` : '30d'
    }
    return token;
};

exports.compareToken = (token) => {
    if (token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
};