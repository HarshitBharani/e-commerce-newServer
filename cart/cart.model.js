const mongoose = require("mongoose")
const {Schema , model} = mongoose

const CartSchema = new Schema({
  user : {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  cart : [{
    product : {
    name : String,
    price : String,
    img : String,
    description : String,
    discount: String
  },
  quantity : Number
    
  }]
})
const cart = new model("cart" , CartSchema)
module.exports = cart 