const Books = require('../models/Books')


//@desc GET all books
//@route GET api/books
//access PUBLIC
exports.getBooks = (req, res, next) => {
  res.json({success: true, msg: "showing all books"})
}

//@desc GET a single book with an id
//@route GET api/books/:id
//access PUBLIC
exports.getBook = async (req, res, next) => {
  try { 
    const book = await Books.findById(req.params.id)

    res.json({success: true, msg: `showing a book with an ${req.params.id}`})
  }
  catch(err) {
    console.log(err)
  }


}

//@desc POST a book
//@route POST api/books
//access PUBLIC
exports.createBook = async (req, res, next) => {
  try {
    const book = await Books.create(req.body)

    res.json({success: true, msg: `Book has been added to database`})

  }
  catch(err) {
    console.log(err)
  }
}

//@desc Update a single book with an id given in params
//@route PUT api/books/:id
//access PUBLIC
exports.updateBook = (req, res, next) => {
  res.json({success: true, msg: `Updated a book with an id ${req.params.id}`})
}

//@desc DELETE a single book 
//@route DELETE api/books/:id
//access PUBLIC
exports.deleteBook = (req, res, next) => {
  res.json({success: true, msg: `Deleted book with an id ${req.params.id}`})
}