const express = require('express')
const getUser = require('../controllers/getUser.js')
const router = express.Router()

router.get('/getinfo', (req, res) => {
    getUser(req.body.email).then((user)=>{
        if (user){
            res.status(200).json(user)
        } else {
            res.status(400).json({message: 'Unable to get user information'})
        }
    })
})

module.exports = router