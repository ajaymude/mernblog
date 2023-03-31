const UserController = require('../controllers/UserController')
const UserRoutes = require('express').Router()



UserRoutes.post('/userregister' , UserController.UserRegister )
UserRoutes.post('/userlogin' , UserController.UserLogin )

module.exports = UserRoutes