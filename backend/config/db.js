import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shreyachawale08:Plswork8!+@cluster0.xaunu4j.mongodb.net/food-del').then(() => console.log("DB connected"));
}