const express = require('express')
const todo = require('../api/todo/todoService')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../api/todo/todoService')
    const userService = require('../api/user/userService')
    todoService.register(router,'/todo')
    //userService.register(router,'/user')
}
