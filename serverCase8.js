const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

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



app.use(bodyParser.urlencoded({ extended: true }));

app.post('/page4', (request, response) => {
    var data = request.body.name
    data += request.body.age
    data += request.body.color


    response.send(data)
    console.log(data)

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