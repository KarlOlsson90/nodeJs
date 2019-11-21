const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.sendFile('./index.html', {
        root: __dirname
    });
});

app.get('/test', (request, response) => {

    response.sendFile('./page2.html', {
        root: __dirname
    });
});





app.get('/page4/', (request, response) => {
    var name = request.query.name
    var age = request.query.age
    var color = request.query.color
    console.log(name, age, color)
    response.sendFile('./page4.html', {
        root: __dirname

    });
});






app.get('/test/:name', (request, response) => {
    var name = request.params.name
    console.log("input är: " + name)

    if (name == "karl") {
        response.sendFile('./page3.html', {
            root: __dirname
        });
    } else {

        response.sendFile('./page2.html', {
            root: __dirname
        });
    }
});

app.listen(port, () => console.log("listening on port " + port + "!"));