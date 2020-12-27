const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter the title'],
    trim: true,
    maxlength: [100, 'Title can not be more than 100']
  },
  isbn: {
    type: String,
    required: [true, 'Please enter the ISBN'],
    unique: true
  },
  pageCount: Number,
  publishedDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  thumbnailUrl: {
    type: String,
  },
  shortDescription: {
    type: String,
    required: [true, 'Please add the short description'],
    maxlength: [255, 'Short description can not be more than 500 letters']
  },
  longDescription: {
    type: String,
    required: [true, 'Please add the long description'],
    maxlength: [1000, 'Short description can not be more than 500 letters']
  },
  status: {
    type: String,
    enum: ['PUBLISH']
  },
  authors: {
    type: [String],
    required: [true, 'Please add an author or authors name']
  },
  categories: {
    type: [String],
    required: [true, 'Please add a category or categories']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Books = new mongoose.model('Book', BookSchema)

module.exports = Books