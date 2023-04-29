const getMany = model => async (req, res, next) => {
  try {
    const data = await model.find({}).exec()

    res.status(200).json({
      success: true,
      data: data,

    })
  } catch (err) {
    console.error(err)
    res.status(404).send({
      success: false,
      message: "something went wrong"
    })
  }

}
const getOne = model => async (req, res, next) => {
  try {
    const data = await model.find({ id: req.id })
    res.status(200).json({
      success: true,
      data: data,
    })
  } catch (err) {
    console.error(err)
    res.status(404).send({
      success: false,
      message: "something went wrong",

    })
  }
}
const postOne = model => async (req, res ,next ) => {
  try{
    const data = new model( req.body )
  const response = await data.save()
    console.log(response.id)
  }catch(err){
    next(err)
    
  }
  
}
const crudControllers = model => ({
  getMany: getMany(model),
  getOne : getOne(model),
  postOne : postOne(model),
  
})

module.exports = crudControllers