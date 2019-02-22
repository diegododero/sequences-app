

var patternCount = (sequence, pattern) => {
  var count = 0;
  for (var i = 0; i < sequence.length - pattern.length + 1; i++){
    if (sequence.slice(i, i + pattern.length) === pattern) {
      count = count + 1;
    }
  }
  return count;
};

module.exports = {
  patternCount
};
