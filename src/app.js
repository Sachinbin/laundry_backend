const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')
const orderRouter = require('./router/order.router')
const authRouter = require("./router/auth.router")
const errorMiddleware = require("./middleware/errorMiddleware")
const cors = require('cors')

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:'*'
}))

app.use('/api/order',orderRouter);
app.use('/api/auth',authRouter)

app.use(errorMiddleware)


module.exports = app;