const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

// var date = new Date()
// date.setHours(date.getHours() - 3)

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, default: false},
    deadLine: { type: Date },
    ip: { type: String, required: false},
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)
