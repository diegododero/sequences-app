const sequences = require('./sequences.js');

const expect = require('expect');

it('should count pattern AUG', () => {
  var result = sequences.patternCount('ACTGCGATACAGGTACAAAUGAAATGGCGAUG', 'AUG');
  expect(2);
});
