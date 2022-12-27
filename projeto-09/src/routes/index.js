const { Router } = require('express')

const userRouter = require('./user.routes')
const movieNotesRouter = require('./movienotes.routes')

const routes = Router()

routes.use("/users", userRouter)
routes.use("/moviesnotes", movieNotesRouter)

module.exports = routes