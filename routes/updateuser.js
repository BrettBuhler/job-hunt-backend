const express = require('express')
const router = express.Router()
const updateUser = require('../controllers/updateUser.js')

router.put('/updateuser', (req, res) => {
    if (req.body.email){
        updateUser(req.body).then((response) => {
            res.status(200).json(response)
        })
    }
})

module.exports = router