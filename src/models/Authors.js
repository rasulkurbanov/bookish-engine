const mongoose = require('mongoose')

const Authors = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Please add an author name`]
  },
  birthdate: {
    type: Date,
    required: [true, `Please add an birthdate`]
  },
  birthplace: {
    type: String,
    maxlength: [255, `Birhplace name can not be more than 255 words`]
  },
  education: {
    university: String,
    degree: String
  }
})  









