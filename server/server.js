var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve('public')));

app.get('/', function (req, res) {
   res.sendFile( path.resolve("public/index.html"));
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("app listening at http://%s:%s", host, port)

})