const knex = require('../database/knex')

class MovieNotesController{
  async create(request, response){
    const { title, description, rating, movietag } = request.body
    const { user_id } = request.params

    const note_id = await knex("movieNotes").insert({
      title,
      description,
      rating,
      user_id
    })

    const movieTagsInsert = movietag.map(name => {
      return{
        name,
        user_id,
        note_id
      }
    })

    await knex("movieTags").insert(movieTagsInsert)

    response.json()
  }
}

module.exports = MovieNotesController