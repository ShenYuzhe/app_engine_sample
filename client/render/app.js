var express = require('express');

var logger = require('morgan');
var BodyParser = require('body-parser');

var app = express();
var express_ws = require('express-ws')(app);

app.listen(5000);

console.log('yuma web');

app.use(logger('dev'));
app.use(BodyParser());
app.use(express.static('../'));
