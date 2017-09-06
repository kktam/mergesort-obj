'use strict';

var constants = require('./constants');

var cmp = function (node1, node2, orders) {
  if (orders === null) {
    return;
  }

  for (var i = 0; i < orders.length; i++) {
    var orderObj = orders[i];

    var attr1 = node1[orderObj.attr];
    var attr2 = node2[orderObj.attr];

    // DEBUG console.log(i + ',' + orderObj.attr + ',' + orderObj.dir + ',' + attr1 + ',' + attr2);
    if (orderObj.dir === constants.DIR_ASC) {
      if (attr1 < attr2) {
        // DEBUG console.log('ASC CMP_LESS_THAN');
        return constants.CMP_LESS_THAN;
      } else if (attr1 === attr2) {
        if (i > (orders.length - 1)) {
          // DEBUG console.log('ASC CMP_EQUAL');
          return constants.CMP_EQUAL;
        }
      } else {
        // DEBUG console.log('ASC CMP_GREATER_THAN');
        return constants.CMP_GREATER_THAN;
      }
    } else if (orderObj.dir === constants.DIR_DSC) {
      if (attr1 > attr2) {
        // DEBUG console.log('DSC CMP_LESS_THAN');
        return constants.CMP_LESS_THAN;
      } else if (attr1 === attr2) {
        if (i > (orders.length - 1)) {
          // DEBUG console.log('DSC CMP_EQUAL');
          return constants.CMP_EQUAL;
        }
      } else {
        // DEBUG console.log('DSC CMP_GREATER_THAN');
        return constants.CMP_GREATER_THAN;
      }
    } else {
      // This is an error
      throw new Error('direction is illegal, not DIR_ASC or DIR_DSC');
    }
  }

  // Cannot find out which has greater precedence - leave it as is
  return constants.CMP_EQUAL;
};

var mergeSortObjMultiKey = function (arr, order) {
  if (arr.length === 0) {
    return [];
  }

  if (typeof order === 'undefined' || order === null) {
    return [];
  }

  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (cmp(arr[i], pivot, order) === constants.CMP_GREATER_THAN) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return this.sortObjMultiKey(left, order).concat(pivot, this.sortObjMultiKey(right, order));
};

module.exports = mergeSortObjMultiKey;
