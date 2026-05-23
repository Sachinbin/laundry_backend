const express = require('express');
const { createOrderController, getOrderController, updateOrderController, deleteOrderController } = require('../controller/order.controller');
let router = express.Router()

router.post("/createOrder",createOrderController)
router.get("/getOrder",getOrderController)
router.put("/updateorder/:id",updateOrderController)
router.delete("/deleteorder/:id",deleteOrderController)
module.exports = router;