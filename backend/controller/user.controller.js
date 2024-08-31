import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndCookies from "../jwt/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exist" })
        }

        // Create new User and password hashing
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await new User({
            name, email, password: hashPassword
        })
        await newUser.save()
        if (newUser) {
            generateTokenAndCookies(newUser._id, res);
            res.status(201).json({ message: "User registered succefully", newUser })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error in signup fun." })

    }
}
// Function for Login *****************
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid user or password" })
        }
        generateTokenAndCookies(user._id, res);
        res.status(201).json({
            message: "user login successfully!!",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error in login fun." })
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie('jwt')
        res.status(200).json({ message: "User Logout Successfully !!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error in logout fun." })
    }
}