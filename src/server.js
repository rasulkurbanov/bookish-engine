const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5500
const router = require('./routes/books')
const connectDB = require('./config/db')
const errorHandler = require('./middlewares/errorHandler')

dotenv.config({ path: './config/config.env' })

app.use(express.json())


//Connect to DB
connectDB()

app.use('/api/books', router)

app.use(errorHandler)




app.listen(PORT, () => console.log(`Server running on ${process.env.NODE_ENV} and on PORT: ${PORT}`))