const OrderModel = require("../models/order.model")
const { createOrderService, getOrderService, updateOrderServices, deleteOrderService } = require("../services/order.service");
const ApiError = require("../utils/apiError");
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
    let result = await getOrderService()

    return res.status(200).json(new ApiResponse("data fetched successfuly", result))
}



let updateOrderController = asyncHandler(async (req, res) => {
    let { id } = req.params;
    let { status } = req.body
    let response = await updateOrderServices(id, status)

    return res.status(200).json(new ApiResponse("Order update successfuly", response))
})

let deleteOrderController = asyncHandler(async (req,res) => {
    let {id} = req.params;
    let response  = await deleteOrderService(id)

    return res.status(200).json(new ApiResponse("order deleted successfuly",response))
})

module.exports = {
    createOrderController,
    getOrderController,
    updateOrderController,
    deleteOrderController
}