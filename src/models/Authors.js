const mongoose = require('mongoose')

const Authors = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Please add an author name`]
  },
  
})