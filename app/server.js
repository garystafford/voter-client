// Start app using Node instead of Apache with app.js

var express = require('express')
var serveStatic = require('serve-static')
var port = process.env.PORT || 9090;
var app = express()

app.use(serveStatic(__dirname, {'index': ['index.html']}))
console.log('Listening on port: ' + port);
app.listen(port)
