//@desc GET all books
//@route GET api/books
//access PUBLIC
exports.getBooks = (req, res, next) => {
  res.json({success: true, msg: "showing all books"})
}

//@desc GET a single book with an id
//@route GET api/books/:id
//access PUBLIC
exports.getBook = (req, res, next) => {
  res.json({success: true, msg: `showing a book with an ${req.params.id}`})
}

//@desc POST a book
//@route POST api/books
//access PUBLIC
exports.createBook = (req, res, next) => {
  res.json({success: true, msg: "created a book"})
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