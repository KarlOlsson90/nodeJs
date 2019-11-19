const express = require('express');
const app = express();
const port = 3000;

app.use('/test', express.static('testmappen'));

app.get('/', (request, response) => {
    response.sendFile('./index.html', {
        root: __dirname
    });
});

app.listen(port, () => console.log("listening on port " + port + "!"));