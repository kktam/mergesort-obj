module.exports = {
  CMP_GREATER_THAN: 1, // Value to return in a sorting function, when first node is found to have "lesser" precedence
  CMP_LESS_THAN: -1, // Value to return in a sorting function, when first node is found to have "greater" precedence
  CMP_EQUAL: 0, // Value to return in a sorting function, when first node is found to have equal precedence as the second

  DIR_ASC: 1, // Direction to instruct sortObj() to use
  DIR_DSC: 2 // Direction to instruct sortObj() to use
};
