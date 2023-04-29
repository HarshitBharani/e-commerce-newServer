const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const mySecret = process.env['ACCESS_KEY_JWT']
const userModel = require("../user/user.model.js")
const cartModel = require("../cart/cart.model.js")
const wishlistModel = require("../wishlist/wishlist.model.js")
function encryptPassword(req){
   req.body.password = bcrypt.hashSync(req.body.password, 10)
}
const createUser =async (req, res, next) => {
   const userExist = await userModel.findOne({email: 
   req.body.email})
  if(userExist){
    res.send("user exsisit")
     }else{
    encryptPassword(req)
  const user = new userModel({email : req.body.email , password: req.body.password})
  const userResponse = await  user.save()
    const {id} = userResponse
    console.log(id)
   res.send(userResponse)
} 
}
const loginUser = model =>async (req,res ,next)=>{
   if (verifyUser(req)){
     const token =  jwt.sign(req.user.id , mySecret )
     const cart = await cartModel.find({id : req.body.user.id}) 
     const {wishlist} = await wishlistModel({email: req.body.email})
     console.log( req.user.id)
     res.send("done")
    
    }
}
const verifyUser =  async (req ) => {
  try{
    const [{password}] = await userModel.find({email: req.body.email})
  return  bcrypt.compareSync(req.body.password , password)
  }catch(err){
    console.log(err)
  }
  
  
  
  ;
}
  

const crudControllers = model => ({
  createUser : createUser,
  verifyUser : verifyUser,
  loginUser : loginUser(model)
  
  
})
module.exports = crudControllers