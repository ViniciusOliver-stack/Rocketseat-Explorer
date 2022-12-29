const { Router } = require('express')

const userRouter = require('./user.routes')
const movieNotesRouter = require('./movienotes.routes')
const movieTagsRouter = require('./movietags.routes')

const routes = Router()

routes.use('/users', userRouter)
routes.use('/moviesnotes', movieNotesRouter)
routes.use('/moviestags', movieTagsRouter)

module.exports = routes
