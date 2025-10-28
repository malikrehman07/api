const jwt = require('jsonwebtoken');
const Users = require('../model/auth');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Token Missing" });

    jwt.verify(token, JWT_SECRET_KEY, async (error, result) => {
        if (!error) {
            req.uid = result.uid;
            // req.user = user;
            // req.uid = decoded.uid;
            next();
        } else {
            console.error("JWT Error:", error);
            return res.status(401).json({ message: "Unauthorized or token invalid" });
        }
    });
};

module.exports = {verifyToken};