const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGO_URI;

const connectDb = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log('Mongo is Connected')
    } catch (error) {
        console.log(error.message, "mongodb connection faild");
        process.exit(1);
    }
}

module.exports = connectDb;