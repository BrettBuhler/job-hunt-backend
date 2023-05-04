const jwt = require('jsonwebtoken')
require('dotenv').config()
//const jwtKey = '3692ace34e563c0bf48c383e49e69ba2f6446cb242106f71a3fb12d264e85776c7f3a2c2393a0e80d16fdeb825123d9b241f8175e95d6c8e67312bdf8eb994a044'
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
        console.log(err)
        return false
    }
}

module.exports = verifyToken