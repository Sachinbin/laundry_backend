const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected successfuly')
    } catch (error) {
        console.log('Database Connection failed')
    }
}

module.exports = connectDB