const express = require('express');
const app = express();
// var bodyparser = require('body-parser');
var path = require('path');

app.use(express.static(__dirname))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(3890,()=>console.log('listening to port 3890'))