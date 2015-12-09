var app = require('express')();
var ue = require('./libs/uncaught_exception');

app.get('/', function(req, res){
  res.send('HELLO WORLD!!!');
});

app.listen(3000, function(){
  console.log('listening on *:3000');
});


throw new Error('Error for handling');
