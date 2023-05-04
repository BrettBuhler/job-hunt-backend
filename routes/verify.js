const express = require('express')
const router = express.Router()
const verifyToken = require('../controllers/verifyToken.js')

/**
 * The verify route authenticates user tokens.
 * returns false if token is invalid, else returns decoded token
 */

router.post('/verify', (req, res) => {
    const { token } = req.body
    if (!token){
        return res.status(401).json({message: 'Token is required'})
    }
    const decodedToken = verifyToken(token)
    if (!decodedToken){
        return false
    }
    res.json(decodedToken)
})

module.exports = router