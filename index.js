const express = require('express')
require('dotenv').config()
const path = require('path')
const tokenRouter = require('./routes/token.js')
const verifyRouter = require('./routes/verify.js')
const signupRouter = require('./routes/signup.js')
const loginRouter = require('./routes/login.js')
const getinfoRouter = require('./routes/getinfo.js')
const updateuserRoute = require('./routes/updateuser.js')
const getkeysRouter = require('./routes/getkeys.js')
const getCoverLetterRouter = require('./routes/getcoverletter.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const crypto = require('crypto')

const frontEndURL = process.env.FRONT_END_URL
const PORT = process.env.PORT
//added static / public
app.use(express.static('public'))
app.use(cors({
    origin: [frontEndURL, 'http://localhost:3000']
  }))
//parse application/json
app.use(bodyParser.json())
//route for generating and ferifying JWT tokens
app.use(tokenRouter)
//route for verifying JWT tokens
app.use(verifyRouter)
//route for signing up a new user
app.use(signupRouter)
//route for loging in
app.use(loginRouter)
//route for getting user info
app.use(getinfoRouter)
//route for updating users
app.use(updateuserRoute)
//route for getting keywords from text
app.use(getkeysRouter)
//route for getting coverletters
app.use(getCoverLetterRouter)

app.get('/', (req, res) => {
    console.log('New User')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT || 5000, () => {
    console.log('Listening on port:' + ` ${PORT}`)
})