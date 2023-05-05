const mongoose = require('mongoose')

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

const Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill