const fs = require('fs');
var no_of_lines = undefined


function asyncTest() {

    const str = buf.toString();

    fs.readFile(process.argv[2], function doneReading(err, str) {

        no_of_lines = str
        no_of_lines++

    });

};

asyncTest()

console.log(no_of_lines)

//console.log(buf)

//const str = buf.toString();

//console.log(str)

//const no_of_lines = str.split('\n').length - 1;

//console.log(no_of_lines);