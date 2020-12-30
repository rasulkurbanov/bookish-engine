const mongoose = require('mongoose')


const UsersSchema = mongoose.Schema({
  id: String,
  index: Number,
  guid: String,
  isActive: Boolean,
  balance: {
    type: String,
    default: "0"
  },
  picture: {
    type: String,
    default: "data/pics/no-photo.jpg"
  },
  age: {
    type: Number,
    default: 25
  },
  name: {
    type: String,
    required: [true, 'Please enter the title'],
    trim: true,
    maxlength: [100, 'Title can not be more than 100']
  },
  gender: {
    type: String,
    default: "male",
    enum: ["male","female"],
    required: [true, "Please enter the gender"]
  },
  company: String,
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    match: [
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 
      "Please add a valid email"
    ]
  },
  phone: {
    type: String,
    maxlength: [25, 'Phone number can not be more than 25']
  },
  address: {
    type: String,
    required: [true, 'Please enter an address']
  },
  about: {
    type: String,
  },
  registered: {
    type: Date,
    default: Date.now()
  },
  tags: [String],
  friends: [{_id: String, name: {type: String}}],
  greeting: {
    type: String,
  },
  favoriteFruit: String,
})


const Users = new mongoose.model('Users', UsersSchema)


module.exports = Users