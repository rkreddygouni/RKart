var express = require('express');

var app = express();

app.use(express.static('app'));

app.listen(3000, function (err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on port 3000');
	}
});