const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected successfuly')
    } catch (error) {
        console.log('Database Connection failed')
        console.log(error.message)
    }
}

module.exports = connectDB