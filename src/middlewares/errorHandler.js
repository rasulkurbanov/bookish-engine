const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) => {
  let error = {...err}

  // console.log(err.message)
  //Log to console for developer

  //Mongoose errors type
  if(err.name === "CastError") {
    let message = `Book not found with an ID of ${err.value} or ID is not valid`
    error = new ErrorResponse(message, 404)
  }

  //ValidationError 
  if(err.name === "ValidationError") {
    const message = Object.values(err.errors).map(val => val.message)
    error = new ErrorResponse(message, 400)
  }

  //Duplicate Key error
  if(err.code === 11000) {
    const message = err.message
    error = new ErrorResponse(message, 400)
  }


  res
    .status(error.statusCode || 500)
    .json({success: false, msg: error.message || `Something went wrong`})
}


module.exports = errorHandler