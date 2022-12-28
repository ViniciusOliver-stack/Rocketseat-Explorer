const { response } = require('express')
const knex = require('../database/knex')

class MovieNotesController {
  async create(request, response) {
    const { title, description, rating, movietag } = request.body
    const { user_id } = request.params

    const note_id = await knex('movieNotes').insert({
      title,
      description,
      rating,
      user_id
    })

    const movieTagsInsert = movietag.map(name => {
      return {
        name,
        user_id,
        note_id
      }
    })

    await knex('movieTags').insert(movieTagsInsert)

    response.json()
  }

  async show(request, response) {
    const { id } = request.params

    const noteMovie = await knex('movieNotes').where({ id }).first()

    const tagsMovie = await knex('movieTags')
      .where({ note_id: id })
      .orderBy('name')

    return response.json({
      ...noteMovie,
      tagsMovie
    })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('movieNotes').where({ id }).delete()

    return response.json()
  }

  async index(request, response) {
    const { user_id } = request.query

    const movieNotes = await knex('movieNotes')
      .where({ user_id })
      .orderBy('title')

    return response.json(movieNotes)
  }
}

module.exports = MovieNotesController
