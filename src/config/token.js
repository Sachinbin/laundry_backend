const jwt = require('jsonwebtoken');

const accessToken = () => {
    return jwt.sign(
        process.env.ACCESS_TOKEN_SECRET
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