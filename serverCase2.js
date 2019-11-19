var request = require('request')

request("https://google.com", function(error, response, body) {
    if (error) {
        //Handle error
    }
    console.log(body)

});