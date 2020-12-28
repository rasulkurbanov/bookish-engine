const Books = require('../models/Books')


//@desc GET all books
//@route GET api/books
//access PUBLIC
exports.getBooks = async (req, res, next) => {
  try {
    const books = await Books.find()

    res
      .status(200)
      .json({ success: true, msg: `showing all books`, data: books })

  }
  catch (err) {
    console.log(err)
  }

  res.json({ success: true, msg: "showing all books" })
}


//@desc GET a single book with an id
//@route GET api/books/:id
//access PUBLIC
exports.getBook = async (req, res, next) => {
  try {
    const book = await Books.findById(req.params.id)

    res
      .status(200)
      .json({ success: true, msg: `showing a book with an ${req.params.id}`, data: book })
  }
  catch (err) {
    // console.log(err)
    next(err)
  }


}


//@desc POST a book
//@route POST api/books
//access PUBLIC
exports.createBook = async (req, res, next) => {
  try {
    const book = await Books.create(req.body)

    res
      .status(201)
      .json({ success: true, msg: `Book has been added to database` })

  }
  catch (err) {
    console.log(err)
  }
}


//@desc Update a single book with an id given in params
//@route PUT api/books/:id
//access PUBLIC
exports.updateBook = async (req, res, next) => {

  //Declaring req.params.id into id
  let id = req.params.id

  try {
    const book = await Books.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    res
      .status(200)
      .json({ success: true, msg: `Updated a book with an id ${id}` })

  }
  catch (err) {
    console.log(err)

    res
      .status(400)
      .json({ success: false, msg: `Something went wrong, or ${err.message}` })
  }

}

//@desc DELETE a single book 
//@route DELETE api/books/:id
//access PUBLIC
exports.deleteBook = async (req, res, next) => {

  //Declaring req.params.id into id
  let id = req.params.id

  try {
    await Books.findByIdAndDelete(id)

    res 
      .status(200)
      .json({success: true, msg: `Book has been deleted with an id of ${id}`})
  }
  catch(err) {
    res
      .status(400)
      .json({ success: false, msg: `Something went wrong with deleting or ${err.message}` }) 

    console.log(err)   
  }

}