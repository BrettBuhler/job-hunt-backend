const express = require('express')
const router = express.Router()
const generateToken = require('../controllers/generateToken.js')

router.post('/token', (req, res) => {
    const { email } = req.body
    const token = generateToken({ email })
    console.log('the token is', token)
    res.status(200).json({token})
})

module.exports = router