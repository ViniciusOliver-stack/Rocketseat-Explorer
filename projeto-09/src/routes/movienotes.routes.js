const { Router } = require('express')

const movieNotesRoutes = Router()

const movieNotesRouter = require('../controllers/MovieNotesController')

const movieNotesController = new movieNotesRouter()

movieNotesRoutes.post('/:user_id', movieNotesController.create)
movieNotesRoutes.get('/:id', movieNotesController.show)
movieNotesRoutes.delete('/:id', movieNotesController.delete)
movieNotesRoutes.get('/', movieNotesController.index)

module.exports = movieNotesRoutes
