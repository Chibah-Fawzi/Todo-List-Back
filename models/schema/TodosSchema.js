var db = require('../../config/db');

const Schema = db.Schema;

var todosSchema = Schema({
    title: String,
    description: String,
    date: Date
});


module.exports = todosSchema;