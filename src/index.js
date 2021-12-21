const express = require('express');

const api = express();

var accesscode;

api.listen(3000, () => {
  console.log('API up and running!');
});

api.use(express.static(__dirname + '/public'));

api.get('/join', (req, res) => {
    accesscode = req.query.code;
    res.send(accesscode);

    const http = require('http');

    http.get('http://akatsukiducaapi.ddns.net/join?code=' + accesscode, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });


})



