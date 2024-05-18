import mongoose from "mongoose";

//เชื่อมต่อฐานข้อมูล mongoDB
export const connectMongoDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")

    } catch(error) {
        console.log("Error connecting to MongoDB: ", error)
    }
}