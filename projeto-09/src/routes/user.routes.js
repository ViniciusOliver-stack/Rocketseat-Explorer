const {Router} = require('express')

const userRoutes = Router()

userRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body

  return response.json({ name, email, password })
})

module.exports = userRoutes