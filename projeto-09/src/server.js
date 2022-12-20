require('express-async-errors')
const express = require('express')
const AppError = require('./utils/AppError')
const routes = require('./routes')
const database = require('./database/sqlite')

const app = express()

database()

app.use(express())
app.use(express.json())

app.use(routes)

app.use(( error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

const PORT = 4000
app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`))