const mongoose = require('mongoose')

const  DBconnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db is connected')
    } catch (error) {
        console.log('db is connected' , error)
    }

}

module.exports = DBconnection