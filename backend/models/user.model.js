import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        require: true
    },
    password: {
        type: String,
        min: 4,
        max: 8,
        require: true
    }
    ,
    confirmPassword: {
        type: String,
        min: 4,
        max: 8,
        require: true
    }

}, { timestamps: true })

const User = mongoose.model('user', userSchema);
export default User;