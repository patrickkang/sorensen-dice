var sorensen = require('../');
var assert = require('chai').assert;

describe('sorensen', function () {
  it('Arguments must be string types', function () {
    var actual = sorensen.bind(null, null, null);
    assert.throws(actual, TypeError);
  });

  it('Comparing a non-empty string to an empty string returns zero', function () {
    var actual = sorensen('hello', '');
    var expected = 0;
    assert.equal(actual, expected);
  });

  it('Similarity of two strings with single character should return 0', function () {
    var actual = sorensen('a', 'b');
    var expected = 0;
    assert.equal(actual, expected);
  });

  it('Similarity of "night" to "nacht" returns 0.25', function () {
    var actual = sorensen('night', 'nacht');
    var expected = 0.25;
    assert.equal(actual, expected);
  });

  it('Similarity of two identical strings returns 1', function () {
    var actual = sorensen('abcdef', 'abcdef');
    var expected = 1;
    assert.equal(actual, expected);
  });

  it('Similarity of two strings with only difference being whitespace does not equal to 1', function () {
    var actual = sorensen('all together', 'alltogether');
    var expected = 1;
    assert.notEqual(actual, expected);
  });

});
