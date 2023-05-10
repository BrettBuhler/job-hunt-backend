express = require('express')
const getKeyWords = require('../controllers/getKeyWords.js')
const router = express.Router()

router.post('/getkeys', (req, res) => {
    const text = req.body.text
    console.log(text)
    getKeyWords(text)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({error: "Error retrieving keywords"})
        })
})

module.exports = router