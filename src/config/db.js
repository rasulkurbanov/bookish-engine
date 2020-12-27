const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })


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


module.exports = connectDB