const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({
    path:'.env'
})
const connectdb = require("./db/connectDB")
const web = require('./routes/web')

app.use(express.json())

connectdb()
app.use('/api',web)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})