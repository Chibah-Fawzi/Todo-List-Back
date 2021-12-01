var db = require('../config/db');

const schema = require('./schema/TodosSchema')

const Todos = db.model('Todos', schema);


module.exports = Todos