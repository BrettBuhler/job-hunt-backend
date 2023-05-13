express = require('express')
const getCoverLetter = require('../controllers/getCoverLetter.js')
const router = express.Router()

router.post('/getcoverletter', (req, res) => {
    const text = req.body.text
    console.log(text)
    getCoverLetter(text)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({error: "Error retrieving cover letter"})
        })
})

module.exports = router