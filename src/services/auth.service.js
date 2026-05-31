const { accessToken } = require("../config/token");
const UserModel = require("../models/auth.model");
const ApiError = require("../utils/apiError")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')



let adminLoginService = async (password) => {
    if (!password) {
        throw new ApiError(400, "Password required")
    }


    if (password !== process.env.ADMIN_PASSWORD) {
        throw new ApiError(401, "Invalid credentials");
    }

    let token = await accessToken()
    return token
}

module.exports = {
     adminLoginService,
}