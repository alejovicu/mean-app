/* No middlewares
var connect = require('connect')
var app = connect()
app.listen(3000)
console.log('Server running at http://localhost:3000/')
*/

var connect = require('connect')
var app = connect()

var logger = function (req, res, next) {
  console.log('method: ' + req.method)
  console.log('url:' + req.url)
  next()
}

var helloWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
}

var byeByeWorld = function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Bye Bye World')
}
app.use(logger)
app.use('/hello', helloWorld)
app.use('/bye', byeByeWorld)
app.listen(3000)
console.log('Server running at http://localhost:3000/')
