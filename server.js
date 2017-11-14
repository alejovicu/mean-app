process.env.NODE_ENV = process.env.NODE_ENV || 'development' // P68 pa' setear la variable de entorno en dev si no está asignada

var express = require('./config/express')
var mongoose = require('./config/mongoose')

var db = mongoose()
var app = express()

app.listen(3000)
module.exports = app
console.log('Server running at http://localhost:3000/')
