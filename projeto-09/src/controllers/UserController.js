const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite')

class UserController{
  async create(request, response){  
    const {name, email, password} = request.body

    const database = await sqliteConnection()

    const checkUserExists = await database.get(`SELECT * FROM users WHERE email = (?)`, [email])

    if(checkUserExists){
      throw new AppError('Este email já está em uso.')
    }

    await database.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, password])

    response.status(201).json()
  }
}

module.exports = UserController