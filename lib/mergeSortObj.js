'use strict';

var constants = require('./constants');

var sortAsc = function (node1, node2, attr) {
  var attr1 = node1[attr];
  var attr2 = node2[attr];

  if (attr1 < attr2) {
    return constants.CMP_LESS_THAN;
  } else if (attr1 === attr2) {
    return constants.CMP_EQUAL;
  }
  return constants.CMP_GREATER_THAN;
};

var sortDsc = function (node1, node2, attr) {
  var attr1 = node1[attr];
  var attr2 = node2[attr];

  if (attr1 > attr2) {
    return constants.CMP_LESS_THAN;
  } else if (attr1 === attr2) {
    return constants.CMP_EQUAL;
  }
  return constants.CMP_GREATER_THAN;
};

var mergeSortObj = function (arr, attr, dir) {
  if (arr.length === 0) {
    return [];
  }

  if (typeof attr === 'undefined' || attr === null) {
    return [];
  }

  if (typeof dir === 'undefined' || dir === null) {
    return [];
  }

  var cmp = (dir === constants.DIR_ASC) ? sortAsc : sortDsc;

  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (cmp(arr[i], pivot, attr) === constants.CMP_GREATER_THAN) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return this.sort(left, cmp).concat(pivot, this.sort(right, cmp));
};

module.exports = mergeSortObj;
