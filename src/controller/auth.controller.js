const { accessToken, refreshToken } = require("../config/token");
const UserModel = require("../models/auth.model");
const { registerService, loginService, meService, adminLoginService } = require("../services/auth.service");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const bcrypt = require("bcrypt")


// let registerController = asyncHandler(async (req, res) => {
//     let data = req.body;
//     let response = await registerService(data)

//     let access = await accessToken(response._id)
//     let refresh = await refreshToken(response._id)
//     response.refresh_Token = refresh;
//     await response.save()

//     res.cookie("accessToken", access)
//     res.cookie("refreshToken", refresh)

//     return res.status(201).json(new ApiResponse("user created successfuly", response))
// })

// let loginController = asyncHandler(async (req, res) => {
//     let data = req.body;
//     let response = await loginService(data)

//     let access = await accessToken(response._id)
//     let refresh = await refreshToken(response._id)

//     response.refresh_Token = refresh;
//     await response.save()

//     res.cookie("accessToken", access, {
//         httpOnly: true,
//         secure: true
//     });

//     res.cookie("refreshToken", refresh, {
//         httpOnly: true,
//         secure: true
//     });

//     return res.status(200).json(new ApiResponse("user logged in successfuly", response))
// })

// let meController = asyncHandler(async (req, res) => {
//     let refresh = req.cookies.refreshToken
//     let newAccessToken = await meService(refresh)


//     res.cookie("accessToken", newAccessToken, {
//         httpOnly: true,
//         secure: true,
//     })

//     return res
//         .status(200)
//         .json(new ApiResponse("Access token refreshed", {
//             accessToken: newAccessToken
//         }));
// })

let adminLoginController = asyncHandler(async (req, res) => {
    let { password } = req.body;
    let response = await adminLoginService(password)

    return res.status(200).json(new ApiResponse("Login succesful",response))
})

module.exports = {
    // registerController,
    // loginController,
    // meController,
    adminLoginController

}