const errorHandler = (err, req, res, next) => {

  //Log to console for developer
  console.log(err.stack.red)

  res
    .status(400)
    .json({success: false, msg: err.message})
}


module.exports = errorHandler