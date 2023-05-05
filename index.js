const express = require('express')
const tokenRouter = require('./routes/token.js')
const verifyRouter = require('./routes/verify.js')
const signupRouter = require('./routes/signup.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const crypto = require('crypto')

app.use(cors({
    origin: ['http://example.com', 'http://localhost:3000']
  }))
//parse application/json
app.use(bodyParser.json())
//route for generating and ferifying JWT tokens
app.use(tokenRouter)
//route for verifying JWT tokens
app.use(verifyRouter)
//route for signing up a new user
app.use(signupRouter)

app.get('/', (req, res) => {
    res.send(crypto.randomBytes(65).toString('hex'))
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})