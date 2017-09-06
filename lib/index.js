'use strict';

var constants = require('./constants');
var mergeSort = require('./mergeSort');
var mergeSortObj = require('./mergeSortObj');
var mergeSortObjMultiKey = require('./mergeSortObjMultiKey');

module.exports = {
  CMP_GREATER_THAN: constants.CMP_GREATER_THAN,
  CMP_LESS_THAN: constants.CMP_LESS_THAN,
  CMP_EQUAL: constants.CMP_EQUAL,
  sort: mergeSort,

  DIR_ASC: constants.DIR_ASC,
  DIR_DSC: constants.DIR_DSC,
  sortObj: mergeSortObj,

  sortObjMultiKey: mergeSortObjMultiKey
};
