import mongoose from "mongoose";



const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('DB connection established');
    })
    await mongoose.connect(`${process.env.MONGO_URI}/libaray management`)
}

export default connectDB;