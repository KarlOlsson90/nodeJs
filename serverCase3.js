var express = require('express');

var app = express();

app.route('/test')
    .get(function(request, response) {
        response.send("välkommen till testsidan")
    })
    .post(function(request, response) {
        response.send("något annat")
    });


app.get('/', function(request, response) {
    response.send('Hello World!');
});

var server = app.listen(3000, function() {})