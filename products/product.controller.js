 const crudControllers = require("../utlis/controller.js")
const Product = require("./product.model")
const controller = crudControllers(Product)


module.exports = controller