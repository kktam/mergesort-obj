'use strict';

var mergeSortObj = function (arr, cmp) {
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
    if (cmp(arr[i], pivot) === this.CMP_GREATER_THAN) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return this.sort(left, cmp).concat(pivot, this.sort(right, cmp));
};

module.exports = {
  CMP_GREATER_THAN: 1,
  CMP_LESS_THAN: -1,
  CMP_EQUAL: 0,
  sort: mergeSortObj
};
