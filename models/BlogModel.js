const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    image:{
        type:String
    },
    title:{
        type:String
    },
    desc:{
        type:String
    }
})

const BlogModel = mongoose.model('blog' , blogSchema)

module.exports = BlogModel