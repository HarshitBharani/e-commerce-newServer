const mongoose = require('mongoose')
const {Schema , model } = mongoose

const wishlistSchema = new Schema({
  user : {
    type : Schema.Types.ObjectId,
    ref : "user"
  },
  wishlist : [
    {
      product :{
         name : String,
    price : String,
    img : String,
    description : String,
    discount: String
      }
    }
  ]
})
const wishlist = new model("wishlist" , wishlistSchema)
module.exports = wishlist 