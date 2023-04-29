const express = require('express');
const productRouter = require('./products/products.router.js')
const userRouter = require('./user/user.router.js')
const connectToDb= require("./dbconnect/dbconnect")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.json())
connectToDb()
userRouter
app.use("/products" , productRouter)
app.use("/user" , userRouter)
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
