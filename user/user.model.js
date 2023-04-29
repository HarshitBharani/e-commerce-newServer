const {model , Schema} = require("mongoose")
const userSchema = new Schema({
  email : {
    type : String,
    required : "email is a required field",
    unique : true ,
  },
  password : {
    type : String ,
    required : "password is required field",
     
  }
})
const user = new model("user" , userSchema)
module.exports = user 