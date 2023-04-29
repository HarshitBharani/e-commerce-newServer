const express = require('express');
const Productrouter = express.Router()
const Productcontroller = require("./product.controller")

Productrouter.route("/")
  .get(Productcontroller.getMany)




module.exports = Productrouter