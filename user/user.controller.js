const crudControllers = require("../utlis/auth.js")
const user = require("./user.model.js")
const userControllers = crudControllers(user)


module.exports = userControllers