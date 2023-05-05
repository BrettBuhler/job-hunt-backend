const mongoose = require('mongoose')
const Skill = require('./skillSchema')

const skillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true
    },
    keywords: {
        type: [String],
        required: true
    }
})

const jobHuntUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    skills: {
        type: [skillSchema],
        required: false
    }

})

const JobHuntUser = mongoose.model('JobHuntUser', jobHuntUserSchema)

module.exports = JobHuntUser