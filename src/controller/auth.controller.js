const { accessToken, refreshToken } = require("../config/token");
const UserModel = require("../models/auth.model");
const { registerService, loginService, meService, adminLoginService } = require("../services/auth.service");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const bcrypt = require("bcrypt")


let adminLoginController = asyncHandler(async (req, res) => {
    let { password } = req.body;
    
    let response = await adminLoginService(password)

    res.cookie('token', response)

    return res.status(200).json(new ApiResponse("Login succesfuly", response))

})

module.exports = {
    adminLoginController

}