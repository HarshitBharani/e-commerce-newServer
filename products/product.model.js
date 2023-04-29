const { model, Schema } = require("mongoose")

const productSchema = new Schema({
    name : String,
    price : String,
    img : String,
    description : String,
    discount: String
  })
 const Product = new model("product", productSchema)
 module.exports = Product