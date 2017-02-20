'use strict';

var getBigrams = function (str) {
  var bigrams = [];
  var strLength = str.length;
  for (var i = 0; i < strLength; i++) {
    bigrams.push(str.substr(i, 2));
  }
  return bigrams;
};

module.exports = function (string1, string2) {
  if (typeof string1 != 'string' || typeof string2 != 'string') {
    throw new TypeError('Arguments must be string types');
  }

  var length1 = string1.length-1;
  var length2 = string2.length-1;
  if (length1 < 1 || length2 < 1) {
    return 0;
  }

  var intersection = 0;
  var bigrams1 = getBigrams(string1);
  var bigrams2 = getBigrams(string2);

  for (var i = 0; i < length1; i++) {
    for (var j = 0; j < length2; j++) {
      if (bigrams1[i] == bigrams2[j]) {
        intersection++;
        bigrams2[j] = null;
        break;
      }
    }
  }

  return (2.0 * intersection) / (length1 + length2);
};