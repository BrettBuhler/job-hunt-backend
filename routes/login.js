const express = require('express')
const generateToken = require('../controllers/generateToken.js')
const bycrypt = require('bcrypt')
const router = express.Router()
const getUser = require('../controllers/getUser.js')

/**
 * Accepts a user object {email: "", password: ""} using the post method.
 * calls the getUser controller to find the user from the DB
 * decrypts the password stored in the DB then compares in input password.
 * If they match return success message and JWT session token, else
 * return error message.
 */

router.post('/login', (req, res) => {
    const userEmail = req.body.email
    const userPassword = req.body.password

    getUser(userEmail)
        .then(user => {
            if(user) {
                bycrypt.compare(userPassword, user.password, (err, result) => {
                    if (result) {
                        //Passwords Match
                        const newToken = generateToken({email: userEmail})
                        res.status(200).json({
                            message: 'Login successful',
                            token: newToken,
                            user: user
                        })
                    } else {
                        //Passwords don't match
                        res.status(401).json({message: 'Invalid email or password'})
                    }
                })
            } else {
                //User not in data base
                res.status(401).json({message: 'Invalid email or password'})
            }
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({message: 'Error retrieving user'})
        })
})

module.exports = router