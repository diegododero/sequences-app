const express = require('express');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const sequences = require('./sequences.js');

app.get('/', (request, response) => {
  response.send('Hi!');
});

app.post('/pattern_count', (request, response) => {
  console.log(request.body);
  var sequence = request.body.sequence;
  var pattern = request.body.pattern;
  console.log(sequences.patternCount(sequence, pattern));
  response.status(200).json({count: sequences.patternCount(sequence, pattern)});
});

app.listen(3000);
