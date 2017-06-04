var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));

var port = 5000;

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);
console.log('The magic happens on port ' + port);
