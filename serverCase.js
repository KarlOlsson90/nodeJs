var http = require('http')

var server = http.createServer(function(request, response) {
    response.writeHead(200, { //200 är statuskod, exempelvis 404 ifall sidan inte hittades vilket i sin tur skulle kunna användas för att göra en egen 404-sida ist för standard
        "Content-Type": "text/plain" //Om det stod "html" istället för "plain" så skulle den kunna läsa in html-taggar (ex: "<h1>Hello world</h1>")
    });

    response.write("Hello world")
    response.end() //end innebär slut på informationsutbytet
});

server.listen(3000);