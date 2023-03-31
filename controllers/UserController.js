const UserModel = require("../models/UserModel")
const jwt = require('jsonwebtoken')

const UserRegister = async (req ,res)=>{
 try {
    console.log(req.body)
    const user = await UserModel.create(req.body)
    console.log(user)
    res.send('data is saved')
      
 } catch (error) {
    console.log('data error' , error)
    res.status(203).send('data is not saved ')
    
 }
}

const UserLogin = async (req ,res)=>{
   try {
    const    {email ,pass} = req.body
      console.log(email , pass)
      const user = await UserModel.findOne({email:email})
      
      console.log(user)
      if(user){
         console.log('user ' , user.pass)
         if(user.pass === pass){
            console.log(process.env.JWT_SECRET)
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:'1h'})
            res.send({user:user,
            status:true,
            token:token
         
         })
         }else{
            res.send( 'pass not match')
         }
         
        
      }else{
         res.send('user is not exist ')
      }
        
   } catch (error) {
      console.log('data error' , error)
      
      
   }
  }

module.exports  ={ UserRegister ,  UserLogin}