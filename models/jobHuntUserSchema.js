const mongoose = require('mongoose')

const jobHuntUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const JobHuntUser = mongoose.model('JobHuntUser', jobHuntUserSchema)

module.exports = JobHuntUser