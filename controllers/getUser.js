require('dotenv').config()
const { MongoClient } = require('mongodb')
const User = require('../models/jobHuntUserSchema.js')

const URI = process.env.MONGODB_URI
const client = new MongoClient(URI)

async function getUser (userEmail) {
    try{
        await client.connect()
        const database = client.db('JobHunt')
        const usersCollection = database.collection('users')
        const user = await usersCollection.findOne({email: userEmail})
        return user
    }
    catch (error) {
        console.error(error)
    } finally {
        await client.close()
    }
}

module.exports = getUser