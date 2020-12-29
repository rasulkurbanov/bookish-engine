const mongoose = require('mongoose')
const db = require('./config/db')
const fs = require('fs')
const dotenv = require('dotenv')


//Loading environmental variables
dotenv.config({ path: './config/config.env' })



//Loading DB model
const Books = require('./models/Books')
const Users = require('./models/Users')


//Connect to Database
const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log(`Successfully connected to MongoDB via mongoose`)
  }
  catch(err) {
    console.log(err)
  }
}

//Read JSON file
const books = fs.readFileSync(`${__dirname}/data/books.json`, 'utf-8')
const users = fs.readFileSync(`${__dirname}/data/people.json`, 'utf-8')

//Import into DB
const importData = async () => {
  try {
    await Books.create(books)
    await Users.create(users)

    process.exit()
  }
  catch(err) {
    console.log('Seeder.js Error: ' + err.message)
  }
}

//Delete data from DB
const deleteData = async () => {
  try {
    await Books.deleteMany()
    await Users.deleteMany()

    process.exit()
  }
  catch(err) {
    console.log('Seeder js Error ' + err.message)
  }
}



if(process.argv[2] === '-im') {
  importData()
}
if(process.argv[2] === '-del') {
  deleteData()
}