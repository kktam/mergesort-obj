const assert = require('assert');
const merge = require('../index.js');

var sortAsc = function (node1, node2) {
  if (node1 < node2) {
    return merge.CMP_LESS_THAN;
  } else if (node1 === node2) {
    return merge.CMP_EQUAL;
  }
  return merge.CMP_GREATER_THAN;
};

var sortObjAsc = function (node1, node2) {
  if (node1.id < node2.id) {
    return merge.CMP_LESS_THAN;
  } else if (node1.id === node2.id) {
    return merge.CMP_EQUAL;
  }
  return merge.CMP_GREATER_THAN;
};

describe('mergesortObj', function () {
  it('sort 3 elements', function () {
    var elm = [3, 2, 1];
    var correctAnswer = [1, 2, 3];
    var results = merge.sort(elm, sortAsc);

    assert(results !== null, 'results should a valid array');
    assert((results instanceof Array), 'results should an array type');
    assert(results.length === 3, 'results should have exactly 3 elements');
    for (var i = 0; i < correctAnswer.length; i++) {
      assert(results[i] === correctAnswer[i], 'results element at index ' + i + ' should be ' + correctAnswer[i]);
    }
  });
});

describe('mergesortObj', function () {
  it('sort 3 object elements', function () {
    var elm = [{id: 3, name: 'Albert'}, {id: 2, name: 'Denny'}, {id: 1, name: 'George'}];
    var correctAnswer = [{id: 1, name: 'George'}, {id: 2, name: 'Denny'}, {id: 3, name: 'Albert'}];
    var results = merge.sort(elm, sortObjAsc);

    assert(results !== null, 'results should a valid array');
    assert((results instanceof Array), 'results should an array type');
    assert(results.length === 3, 'results should have exactly 3 elements');
    for (var i = 0; i < correctAnswer.length; i++) {
      assert(results[i].id === correctAnswer[i].id, 'results element at index ' + i + ' should be index ' + correctAnswer[i].id);
      assert(results[i].name === correctAnswer[i].name, 'results element at index ' + i + ' should be name ' + correctAnswer[i].name);
    }
  });
});

describe('mergesortObj', function () {
  it('sort 3 object elements, using sortObj() helper function, in ascending order', function () {
    var attr = 'id';
    var elm = [{id: 3, name: 'Albert'}, {id: 2, name: 'Denny'}, {id: 1, name: 'George'}];
    var correctAnswer = [{id: 1, name: 'George'}, {id: 2, name: 'Denny'}, {id: 3, name: 'Albert'}];
    var results = merge.sortObj(elm, attr, merge.DIR_ASC);

    assert(results !== null, 'results should a valid array');
    assert((results instanceof Array), 'results should an array type');
    assert(results.length === 3, 'results should have exactly 3 elements');
    for (var i = 0; i < correctAnswer.length; i++) {
      assert(results[i][attr] === correctAnswer[i][attr], 'results element at index ' + i + ' should be index ' + correctAnswer[i].id);
      assert(results[i].name === correctAnswer[i].name, 'results element at index ' + i + ' should be name ' + correctAnswer[i].name);
    }
  });
});

describe('mergesortObj', function () {
  it('sort 3 object elements, using sortObj() helper function, in desending order', function () {
    var attr = 'id';
    var elm = [{id: 1, name: 'George'}, {id: 2, name: 'Denny'}, {id: 3, name: 'Albert'}];
    var correctAnswer = [{id: 3, name: 'Albert'}, {id: 2, name: 'Denny'}, {id: 1, name: 'George'}];
    var results = merge.sortObj(elm, attr, merge.DIR_DSC);

    assert(results !== null, 'results should a valid array');
    assert((results instanceof Array), 'results should an array type');
    assert(results.length === 3, 'results should have exactly 3 elements');
    for (var i = 0; i < correctAnswer.length; i++) {
      assert(results[i][attr] === correctAnswer[i][attr], 'results element at index ' + i + ' should be index ' + correctAnswer[i].id);
      assert(results[i].name === correctAnswer[i].name, 'results element at index ' + i + ' should be name ' + correctAnswer[i].name);
    }
  });
});

describe('mergesortObj', function () {
  it('sort 4 object elements, using sortObjMultiKey() helper function, in ascending order', function () {
    // Order by firstname, and then lastname
    var order = [{attr: 'firstname', dir: merge.DIR_ASC}, {attr: 'lastname', dir: merge.DIR_ASC}];
    var elm = [{id: 1, firstname: 'George', lastname: 'Washington'}, {id: 2, firstname: 'Ronald', lastname: 'Reagan'}, {id: 3, firstname: 'Albert', lastname: 'Einstein'}, {id: 4, firstname: 'George', lastname: 'Michael'}];
    var correctAnswer = [{id: 3, firstname: 'Albert', lastname: 'Einstein'}, {id: 4, firstname: 'George', lastname: 'Michael'}, {id: 1, firstname: 'George', lastname: 'Washington'}, {id: 2, firstname: 'Ronald', lastname: 'Reagan'}];
    var results = merge.sortObjMultiKey(elm, order);

    // DEBUG console.log(results);

    assert(results !== null, 'results should a valid array');
    assert((results instanceof Array), 'results should an array type');
    assert(results.length === 4, 'results should have exactly 4 elements');
    for (var i = 0; i < correctAnswer.length; i++) {
      assert(results[i].id === correctAnswer[i].id, 'results element at index ' + i + ' should be id ' + correctAnswer[i].id);
      assert(results[i].firstname === correctAnswer[i].firstname, 'results firstname attribute at index ' + i + ' should be ' + correctAnswer[i].firstname);
      assert(results[i].lastname === correctAnswer[i].lastname, 'results lastname attribute at index ' + i + ' should be ' + correctAnswer[i].lastname);
    }
  });
});

describe('mergesortObj', function () {
  it('sort 4 object elements, using sortObjMultiKey() helper function, in mixed order', function () {
    // Order by firstname, and then lastname
    var order = [{attr: 'firstname', dir: merge.DIR_ASC}, {attr: 'lastname', dir: merge.DIR_DSC}];
    var elm = [{id: 1, firstname: 'George', lastname: 'Washington'}, {id: 2, firstname: 'Ronald', lastname: 'Reagan'}, {id: 3, firstname: 'Albert', lastname: 'Einstein'}, {id: 4, firstname: 'George', lastname: 'Michael'}];
    var correctAnswer = [{id: 3, firstname: 'Albert', lastname: 'Einstein'}, {id: 1, firstname: 'George', lastname: 'Washington'}, {id: 4, firstname: 'George', lastname: 'Michael'}, {id: 2, firstname: 'Ronald', lastname: 'Reagan'}];
    var results = merge.sortObjMultiKey(elm, order);

    // DEBUG console.log(results);

    assert(results !== null, 'results should a valid array');
    assert((results instanceof Array), 'results should an array type');
    assert(results.length === 4, 'results should have exactly 4 elements');
    for (var i = 0; i < correctAnswer.length; i++) {
      assert(results[i].id === correctAnswer[i].id, 'results element at index ' + i + ' should be id ' + correctAnswer[i].id);
      assert(results[i].firstname === correctAnswer[i].firstname, 'results firstname attribute at index ' + i + ' should be ' + correctAnswer[i].firstname);
      assert(results[i].lastname === correctAnswer[i].lastname, 'results lastname attribute at index ' + i + ' should be ' + correctAnswer[i].lastname);
    }
  });
});
