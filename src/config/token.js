const jwt = require('jsonwebtoken');

const accessToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
    );
};

const refreshToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
    );
};

module.exports = {
    accessToken,
    refreshToken
};