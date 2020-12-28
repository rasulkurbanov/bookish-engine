const errorHandler = (err, req, res, next) => {

  //Log to console for developer
  console.log(err.stack)

  res
    .status(err.statusCode || 500)
    .json({success: false, msg: err.message || `Something went wrong`})
}


module.exports = errorHandler