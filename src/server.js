const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5500
const router = require('./routes/books')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

//Connect to DB
connectDB()

app.use('/api/books', router)




app.listen(PORT, () => console.log(`Server running on ${process.env.NODE_ENV} and on PORT: ${PORT}`))