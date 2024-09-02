import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';
import userRoute from "./route/user.route.js"
import cors from "cors"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(express.json())
app.use(cors())
app.use("/api/auth", userRoute)

// Database Connection
try {
    mongoose.connect(process.env.MONGO_URL)
    console.log("Database connected Successfully.");


} catch (error) {
    console.log("Database connection error" + error);

}


// App listen
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);

})