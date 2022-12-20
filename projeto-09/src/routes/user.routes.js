const { Router } = require('express')

const usersRoutes = Router()

const UserController = require('../controllers/UserController')
const userController = new UserController()

usersRoutes.post('/', userController.create)

module.exports = usersRoutes