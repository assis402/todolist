const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/todo'
module.exports = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})