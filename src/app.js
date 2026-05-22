const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const orderRouter = require('./router/order.router')
const errorMiddleware = require("./middleware/errorMiddleware")

app.use(cookieParser())
app.use(express.json())


app.use('/api/order',orderRouter);

app.use(errorMiddleware)


module.exports = app;