const { accessToken } = require("../config/token");
const UserModel = require("../models/auth.model");
const ApiError = require("../utils/apiError")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

let registerService = async (data) => {
    let { name, email, password } = data;
    if (!email || !password) throw new ApiError(400, "all field are required ")

    let isExist = await UserModel.findOne({ email })
    if (isExist) {
        throw new ApiError(409, "user is allready exist")
    }

    let hashPass = await bcrypt.hash(password, 10)
    let response = await UserModel.create({
        name,
        email,
        password: hashPass,
    })

    return response;
}

let loginService = async (data) => {
    let { email, password } = data;
    if (!password) throw new ApiError(400, "all field are required ")

    let user = await UserModel.findOne({ email })
    if (!user) {
        throw new ApiError(404, "user not found")
    }

    let isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new ApiError(401, "Invalid credentials")
    }

    return user;
}

let meService = async (refresh) => {
    if (!refresh) {
        throw new ApiError(401, "Refresh token required");
    }

    let decode = jwt.verify(
        refresh,
        process.env.REFRESH_TOKEN_SECRET
    )



    let newAccessToken = accessToken(decode.id)

    return newAccessToken

}

let adminLoginService = async (password) => {
    if (!password) {
        throw new ApiError(400, "Please fill the field")
    }


    if (password !== process.env.ADMIN_PASSWORD) {
        throw new ApiError(401, "Invalid credentials");
    }

    return true
}

module.exports = {
    registerService,
    loginService,
    meService,
     adminLoginService,
}