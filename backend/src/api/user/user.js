const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    todoList: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }]
})

module.exports = restful.model('User', userSchema)