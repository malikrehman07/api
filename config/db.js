const mongoose = require("mongoose")
require("dotenv").config()

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const connectDB = (async () => {
    await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.aar1elp.mongodb.net/intern`)
        .then(() => {
            console.log('MongoDB Connected Successfully')
        })
        .catch((error) => {
            console.error(error)
        })
})

module.exports = connectDB