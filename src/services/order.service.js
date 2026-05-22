const OrderModel = require("../models/order.model");
const ApiError = require("../utils/apiError");

let createOrderService = async (data) => {
    let { customerName, name, amountPerCloth, quantity } = data

    if (!customerName || !name || !amountPerCloth || !quantity) {
        throw new ApiError(400, "all fields are required");
    }

    let newOrder = await OrderModel.create({
        customerName,
        clothes: [
            {
                name,
                amountPerCloth,
                quantity
            }
        ]
    })
    console.log('created');


    return newOrder
}

let getOrderService =async ()=>{
    let response = await OrderModel.find()
    return response
}

module.exports = {
    createOrderService,
    getOrderService
}