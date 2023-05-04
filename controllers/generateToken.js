const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtKey = process.env.JWT_KEY

const generateToken = (user) => {
    const payload = {
        email: user.email
    }
    const token = jwt.sign(payload, jwtKey, {expiresIn: '1h'})
    return token
}



module.exports = generateToken