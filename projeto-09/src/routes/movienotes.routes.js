const { Router } = require('express')

const movieNotesRoutes = Router()

const movieNotesRouter = require('../controllers/MovieNotesController')

const movieNotesController = new movieNotesRouter()

movieNotesRoutes.post("/:user_id", movieNotesController.create) 

module.exports = movieNotesRoutes