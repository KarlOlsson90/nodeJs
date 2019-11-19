var express = require('express');

var app = express();

var path = require('path');

app.get('/', (request, response) => {
    response.sendFile('./index.html', {
        root: __dirname
    });
});

app.get('/1', (request, response) => {
    response.sendFile('./page2.html', {
        root: __dirname
    });
});

app.get('/2', (request, response) => {
    response.sendFile('./page3.html', {
        root: __dirname
    });
});



app.listen(3000)