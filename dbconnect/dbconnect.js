const mongoose = require("mongoose")

async function connectToDb(){
  const url = "mongodb+srv://admin:AEXNiW5K3hTNXGwM@cluster0.69v0d.mongodb.net/?retryWrites=true&w=majority"
  await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connected")).catch(err=>console.dir(err))

 }
 module.exports = connectToDb