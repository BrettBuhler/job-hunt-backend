const express = require('express')
const getUser = require('../controllers/getUser.js')
const router = express.Router()

router.get('/getinfo', (req, res) => {
    const userEmail = req.query.email
    try {
        getUser(userEmail).then((user)=>{
            if (user){
                res.status(200).json(user)
            } else {
                res.status(400).json({message: 'Unable to get user information'})
            }
        })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router