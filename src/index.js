const express = require('express');

const api = express();

var accesscode;

api.listen(5000, () => {
  console.log('API up and running!');
});

api.use(express.static(__dirname + '/public'));

api.get('/join', (req, res) => {
  accesscode = req.query.code;
  res.send('<h1>You are now connected to the server!</h1>');
  const request = require('request');
  request('http://akatsukiducaapi.ddns.net/join?code=' + accesscode, function (error, response, body) {
  if (err) { return console.log(err); }
  });
});

api.get('/facebookwebhook', (req, res) => {
  token = req.query.token;
  if (token == 'null') {
    res.send('Access denied');
  }
  else {
    if (token == 'webhookcuafacebookkiabruh')
    {
      res.send('Access granted');
    }
  }

});