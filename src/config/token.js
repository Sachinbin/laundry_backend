const jwt = require('jsonwebtoken');

const accessToken = () => {
    return jwt.sign(
        {role:'admin'},
        process.env.ACCESS_TOKEN_SECRET,
         { expiresIn: "1d" }
    );
};



module.exports = {
    accessToken
};