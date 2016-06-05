var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(express.static(__dirname+'/angular'));

app.listen(3000);
console.log('Server is listening at 3000');