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
    const { user_id, title, movietag } = request.query

    let movieNotes

    if (movietag) {
      const filterMovieTag = movietag
        .split(',')
        .map(movieTag => movieTag.trim())

      movieNotes = await knex('movieTags')
        .select(['movieNotes.id', 'movieNotes.title', 'movieNotes.user_id'])
        .where('movieNotes.user_id', user_id)
        .whereLike('movieNotes.title', `%${title}%`) //Vamos filtrar pelo título
        .whereIn('name', filterMovieTag)
        .innerJoin('movieNotes', 'movieNotes.id', 'movieTags.note_id')
    } else {
      movieNotes = await knex('movieNotes')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title')
    }

    const userMovieTags = await knex('movieTags').where({ user_id })
    const noteWhithTags = movieNotes.map(note => {
      const noteTags = userMovieTags.filter(tag => tag.note_id === note.id)

      return {
        ...movieNotes,
        movietag: noteTags
      }
    })

    return response.json({ noteWhithTags })
  }
}

module.exports = MovieNotesController
