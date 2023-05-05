const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtKey = process.env.JWT_KEY
/**
 * Take in a JWT web token, return a decoded token if falid, else false
 * @param {'A JWT web token'} token 
 * @returns a dedoded JWT web token or false
 */
const verifyToken = (token) => {
    try{
        const decoded = jwt.verify(token, jwtKey)
        return decoded
    } catch (err) {
        return false
    }
}

module.exports = verifyToken