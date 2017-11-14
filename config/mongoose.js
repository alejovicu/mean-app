var config = require('./config')
var mongoose = require('mongoose')

module.exports = function () {
  var db = mongoose.connect(config.db, {
    useMongoClient: true
    /* other options */
  })

  // Models Registry
  require('../app/models/user.server.model')

  return db
}
