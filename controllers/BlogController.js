const BlogModel = require("../models/BlogModel")

const usercreateblog =  async( req, res)=>{
    console.log(req.body)
    const {image , title, desc}  =req.body
    console.log(image , title , desc)

    try {
        if(image=='' || title=='' || desc==''){
            await res.send(' enter all terms')
        }else{
            const Nblog = await BlogModel.create(req.body)
            await res.send('blog is saved')

        }
          
    } catch (error) {
        console.log('blog controller error' , error)
    }
   

}
const userallblog =  async (req, res)=>{
    try {
        const allblog = await BlogModel.find()
        res.send(allblog) 
    } catch (error) {
        console.log('all blog error ')
        
    }
}

const userreadmore =  async (req, res)=>{
    try {
        const single = await BlogModel.findById(req.params.id)
        console.log(single)
        res.send(single)
        console.log(req.params.id)
        
    } catch (error) {
        console.log('all blog userreadmore ')
        
    }
}

module.exports = { usercreateblog , userallblog  , userreadmore}