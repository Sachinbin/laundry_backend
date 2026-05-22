require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/config/db')
let port = process.env.PORT


connectDB()
app.listen(port,()=>{
    console.log(`server listening port ${port}`)
})