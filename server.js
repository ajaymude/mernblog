const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const  DBconnection  = require('./database/dbconnection')
const UserRoutes = require('./routes/UserRoutes')
const BlogRoute = require('./routes/BlogRoute')
const env = require('dotenv').config()
const app = express()


//db connection
DBconnection()


// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
 app.use(express.static('build'))


// routes
app.use('/', UserRoutes) 
app.use('/', BlogRoute)


// server listening 
app.listen(process.env.PORT , ()=>{ console.log('server is runnig on port')})