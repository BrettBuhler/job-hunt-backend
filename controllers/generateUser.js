require('dotenv').config()
const { MongoClient } = require('mongodb')
const User = require('../models/jobHuntUserSchema.js')

const URI = process.env.MONGODB_URI
const client = new MongoClient(URI)

async function generateUser(userEmail, userPassword) {
    let res = true
    try {
        await client.connect()
        const database = client.db('JobHunt')
        const usersCollection = database.collection('users')

        const existingUser = await usersCollection.findOne({email: userEmail})
        if (existingUser){
            res = false
            throw new Error('User already exists')
        }

        const newUser = new User ({
            email: userEmail,
            password: userPassword
        })

        const result = await usersCollection.insertOne(newUser)
        console.log(`New user created with email ${result.insertedId}`)
    } catch (err) {
        console.error(err)
        res = false
    } finally {
        await client.close()
    }
    return res
}

module.exports = generateUser