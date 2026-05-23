const OrderModel = require("../models/order.model");
const ApiError = require("../utils/apiError");

let createOrderService = async (data) => {
    let {
        customer,
        phone,
        service,
        quantity,
        amount,
        due,
        tower,
        flat
    } = data;

    if (!customer || !phone || !amount || !quantity) {
        throw new ApiError(400, "all fields are required");
    }

    let newOrder = await OrderModel.create({
        customer,
        phone,
        service,
        quantity,
        amount,
        due,
        tower,
        flat
    })
    console.log('created');


    return newOrder
}

let getOrderService = async () => {
    let response = await OrderModel.find()
    return response
}

let updateOrderServices = async (id,status) => {
     if(!id) {
        throw new ApiError(404,"please provide user Id")
    }

    let response = await OrderModel.findByIdAndUpdate(
        id,
        {
            status,
        },
        {
            new:true
        }
    )
    return response
}

let deleteOrderService = async (id) => {
    let response = await OrderModel.findByIdAndDelete(id)
    return response
}
module.exports = {
    createOrderService,
    getOrderService,
    updateOrderServices,
    deleteOrderService
}