const express = require("express")

const userRouter = express.Router()
const userController = require("./user.controller.js")
 

userRouter.route("/signup")
  .post( (req , res ,next)=>{
    
    userController.createUser(req , res, next)
    
  })
userRouter.route("/login")
  
  
userRouter.route("/id")
  .post(userController.loginUser)
module.exports = userRouter