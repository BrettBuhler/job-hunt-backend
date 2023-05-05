const express = require('express')
const router = express.Router()
const generateToken = require('../controllers/generateToken.js')
const generateUser = require('../controllers/generateUser.js')

router.post('/signup', (req, res) => {
    console.log(req.body.email, req.body.password)
    const userEmail = req.body.email
    const userPassword = req.body.password
    if (userEmail && userPassword){
        generateUser(userEmail, userPassword)
        .then(dbRes => {
            console.log('dbRes', dbRes)
            if (dbRes){
                res.status(200).json(generateToken({userEmail}))
            } else {
                res.status(400).json({'Error': 'User email already taken.'})
            }
        })
    }
})

module.exports = router