const config = require('../../../knexfile')
const knex = require('knex')

const conncetionKnex = knex(config.development)

module.exports = conncetionKnex