const OrderModel = require("../models/order.model")
const { createOrderService, getOrderService } = require("../services/order.service")
const ApiResponse = require("../utils/ApiResponse")
const asyncHandler = require("../utils/asyncHandler")

let createOrderController = asyncHandler(async (req, res) => {

    let data = req.body
    let result = await createOrderService(data)

    return res
        .status(201)
        .json(new ApiResponse("oreder created successfuly", result))


});


let getOrderController = async (req, res) => {
    try {
        let result = await getOrderService()

        return res.status(200).json(new ApiResponse("data fetched successfuly", result))

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

module.exports = {
    createOrderController,
    getOrderController
}