'use strict';

var constants = require('./constants');

var mergeSort = function (arr, cmp) {
  if (arr.length === 0) {
    return [];
  }

  if (typeof cmp === 'undefined' || cmp === null) {
    return [];
  }

  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (cmp(arr[i], pivot) === constants.CMP_GREATER_THAN) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return this.sort(left, cmp).concat(pivot, this.sort(right, cmp));
};

module.exports = mergeSort;
