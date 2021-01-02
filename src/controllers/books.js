const Books = require('../models/Books')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middlewares/asyncHandler')


//@desc GET all books
//@route GET api/books
//access PUBLIC
exports.getBooks = asyncHandler( async (req, res, next) => {

  let query = req.query

  queryStr = JSON.stringify(query)

    const books = await Books.find(JSON.parse(queryStr))

    if (!books) {
      return next(new ErrorResponse(`Books not found`, 404))
    }

    res
      .status(200)
      .json({ success: true, msg: `showing all books`, data: books })

})


//@desc GET a single book with an id
//@route GET api/books/:id
//access PUBLIC
exports.getBook = asyncHandler( async (req, res, next) => {
    const book = await Books.findById(req.params.id)

    if (!book) {
      return next(new ErrorResponse(`Book not found`, 404))
    }

    res
      .status(200)
      .json({ success: true, msg: `Showing a book with an ${req.params.id}`, data: book })

})

//@desc POST a book
//@route POST api/books
//access PUBLIC
exports.createBook = asyncHandler( async (req, res, next) => {
    const book = await Books.create(req.body)

    res
      .status(201)
      .json({ success: true, msg: `Book has been added to database` })

})


//@desc Update a single book with an id given in params
//@route PUT api/books/:id
//access PUBLIC
exports.updateBook = asyncHandler( async (req, res, next) => {
  //Declaring req.params.id into id
  let id = req.params.id

    const book = await Books.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    if (!book) {
      return next(new ErrorResponse(`Book not found`, 404))
    }

    res
      .status(200)
      .json({ success: true, msg: `Updated a book with an id ${id}` })

})

//@desc DELETE a single book 
//@route DELETE api/books/:id
//access PUBLIC
exports.deleteBook = asyncHandler( async(req, res, next) => {

  //Declaring req.params.id into id
  let id = req.params.id

    await Books.findByIdAndDelete(id)

    res
      .status(200)
      .json({ success: true, msg: `Book has been deleted with an id of ${id}` })
})