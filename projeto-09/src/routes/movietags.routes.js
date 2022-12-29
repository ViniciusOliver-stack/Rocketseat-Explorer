const { Router } = require('express')

const movieTagsRoutes = Router()

const movieTagsRouter = require('../controllers/MovieTagsController')

const movieTagsController = new movieTagsRouter()

movieTagsRoutes.get('/:user_id', movieTagsController.index)

module.exports = movieTagsRoutes
