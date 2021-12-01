var db = require('../../config/db');

const Schema = db.Schema;

var userSchema = Schema({
    email: String
});


module.exports = userSchema;