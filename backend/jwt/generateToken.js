import jwt from "jsonwebtoken"

const generateTokenAndCookies = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: "3d"
    });
    res.cookie("jwt", token, {
        httpOnly: true, // protect from XSS attack
        secure: true,
        sameSite: "strict" // protect from CSRF attack
    })
}

export default generateTokenAndCookies;