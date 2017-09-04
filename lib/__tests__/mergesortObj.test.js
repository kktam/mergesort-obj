const assert = require('assert');
const mergesortObj = require('../index.js');

var sortAsc = function (node1, node2) {
  if (node1 < node2) {
    return mergesortObj.CMP_LESS_THAN;
  } else if (node1 === node2) {
    return mergesortObj.CMP_EQUAL;
  }
  return mergesortObj.CMP_GREATER_THAN;
};

describe('mergesortObj', function () {
  it('sort 3 elements', function () {
    var elm = [3, 2, 1];
    var correctAnswer = [1, 2, 3];
    var results = mergesortObj.sort(elm, sortAsc);

    assert(results !== null, 'results should a valid array');
    assert((results instanceof Array), 'results should an array type');
    assert(results.length === 3, 'results should have exactly 3 elements');
    for (var i = 0; i < correctAnswer.length; i++) {
      assert(results[i] === correctAnswer[i], 'results element at index ' + i + ' should be ' + correctAnswer[i]);
    }
  });
});
