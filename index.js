const express = require('express')
const tokenRouter = require('./routes/token.js')
const verifyRouter = require('./routes/verify.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const crypto = require('crypto')

//parse application/json
app.use(bodyParser.json())
//route for generating and ferifying JWT tokens
app.use(tokenRouter)
//route for verifying JWT tokens
app.use(verifyRouter)

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.send(crypto.randomBytes(65).toString('hex'))
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})