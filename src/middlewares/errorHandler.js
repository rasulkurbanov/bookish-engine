const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) => {
  let error = {...err}


  //Log to console for developer
  console.log(err)

  //Mongoose errors type
  if(err.name === "CastError") {
    let message = `Book not found with an ID or ID is not valid`
    error = new ErrorResponse(message, 404)

  }

  res
    .status(error.statusCode || 500)
    .json({success: false, msg: error.message || `Something went wrong`})
}


module.exports = errorHandler