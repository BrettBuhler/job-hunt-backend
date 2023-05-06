const express = require('express')
const bycrypt = require('bcrypt')
const router = express.Router()
const generateToken = require('../controllers/generateToken.js')
const generateUser = require('../controllers/generateUser.js')

router.post('/signup', (req, res) => {
    console.log(req.body.email, req.body.password)
    const userEmail = req.body.email
    const userPassword = req.body.password
    let hashedPassword = ''
    if (userEmail && userPassword){
        bycrypt.genSalt(10, (err, salt) => {
            bycrypt.hash(userPassword, salt, (err, hash)=>{
                hashedPassword = hash
                generateUser(userEmail, hashedPassword)
                .then(dbRes => {
                    console.log('dbRes', dbRes)
                    if (dbRes){
                        res.status(200).json(generateToken({email: userEmail}))
                    } else {
                        res.status(400).json({'Error': 'User email already taken.'})
                    }
                })
            })
        })
    }
})

module.exports = router