const express = require('express');
const { createOrderController, getOrderController } = require('../controller/order.controller');
let router = express.Router()

router.post("/createOrder",createOrderController)
router.get("/getOrder",getOrderController)
module.exports = router;