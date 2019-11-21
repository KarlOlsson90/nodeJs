const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    let names = ['Robert', 'Jack', 'David'];
    response.render('testfilen.ejs', {
        names: names,
        variabeln: 'testtext'

    });
});


app.listen(port, () => console.log("listening on port " + port + "!"));