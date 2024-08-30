import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080

try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Database connected Successfully.");


} catch (error) {
    console.log("Database connection error" + error);

}

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);

})