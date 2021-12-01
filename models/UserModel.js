var db = require('../config/db');

const schema = require('./schema/UserSchema')

const User = db.model('User', schema);


module.exports = User