const express = require('express')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5500
const router = require('./routes/books')

dotenv.config({ path: './config/config.env' })


app.use('/api/books', router)




app.listen(PORT, () => console.log(`Server running on ${process.env.NODE_ENV} and on PORT: ${PORT}`))