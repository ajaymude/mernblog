const  BlogController  = require('../controllers/BlogController')

const BlogRoute = require('express').Router()

BlogRoute.post('/usercreateblog',  BlogController.usercreateblog)
BlogRoute.get('/userallblog',  BlogController.userallblog)
BlogRoute.get('/readmore/:id',  BlogController.userreadmore)

module.exports = BlogRoute