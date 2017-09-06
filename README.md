# mergesort-obj [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> merge sort with objects support

## Installation

```sh
$ npm install --save mergesort-obj
```

## Usage

The basic usage requires a user to create a custom sorting function, and passes it to the sort() method.

```js
const merge = require('mergesort-obj');

// define a sorting function
// the sorting function should have input parameters, node1 (first node) and node2 (second node) for comparison
// the function should resolve 3 possible outcomes, where the first node is deemed to have lesser precedence (CMP_GREATER_THAN), same precedence CMP_EQUAL, or greater precedence (CMP_LESS_THAN). Greater precedence gets placed in the beginning of the array.
var sortAsc = function (node1, node2) {
  if (node1 < node2) {
    return merge.CMP_LESS_THAN;
  } else if (node1 === node2) {
    return merge.CMP_EQUAL;
  }
  return merge.CMP_GREATER_THAN;
};

// define an array
var elm = [3, 2, 1];

// sort the array
var results = merge.sort(elm, sortAsc);

foreach (var item in results) {
    console.log(item);
}
```

The library supports objects in arrays and one can create a simple sorting function to sort based on a particular attribute in the object, such as follows:

```
var sortDsc = function (node1, node2) {
  if (node1.id > node2.id) {
    return merge.CMP_LESS_THAN;
  } else if (node1.id === node2.id) {
    return merge.CMP_EQUAL;
  }
  return merge.CMP_GREATER_THAN;
};
```

This library has a helper function, sortObj() that makes this easier. This function simplifies the use of sorting algorithm, without the need of creating a custom sorting function.

For simple objects with simple search keys, one can use the sortObj() to perform the same key based searches above, as follows:

```
var attr = 'id';
var elm = [{id: 3, name: 'Albert'}, {id: 2, name: 'Denny'}, {id: 1, name: 'George'}];

var results = merge.sortObj(elm, attr, merge.DIR_ASC);
```

to use sortObj() function, provide the name of the attribute to be used as sorting key (attr), and the direction, DIR_ASC for ascending sort, and DIR_DSC for descending sort.

To further support complex sorting even more, the helper function sortObjMultiKey() is introduced to arrange sorting on multiple keys.

To use this function, one must supply first the array, and second the "order" definition structure. The order structure is an array of objects with the following attributes:

```
[{attr: 'name of attribute', dir: direction}, { ... } , ...];
```

attr is the exact spelling of the attribute to use as key, and dir is the direction of the search, either DIR_ASC (ascending), or DIR_DSC (descending).

The sort order is defined by order of the element position in the array, i.e. the first object in the array is the key that will be sorted first. If the algorithm cannot determine precedence with the first key, it will move the second, third, and so forth, until either all the keys have run out, or an decision has been made.

The following is an example of setting up sorting using 2 keys with mixed direction.

```
    // Order by firstname, and then lastname
    var order = [{attr: 'firstname', dir: merge.DIR_ASC}, {attr: 'lastname', dir: merge.DIR_DSC}];
    var elm = [{id: 1, firstname: 'George', lastname: 'Washington'}, {id: 2, firstname: 'Ronald', lastname: 'Reagan'}, {id: 3, firstname: 'Albert', lastname: 'Einstein'}, {id: 4, firstname: 'George', lastname: 'Michael'}];
    var results = merge.sortObjMultiKey(elm, order);
```

## License

MIT © [Nelson Tam]()


[npm-image]: https://badge.fury.io/js/mergesort-obj.svg
[npm-url]: https://npmjs.org/package/mergesort-obj
[travis-image]: https://travis-ci.org/kktam/mergesort-obj.svg?branch=master
[travis-url]: https://travis-ci.org/kktam/mergesort-obj
[daviddm-image]: https://david-dm.org/kktam/mergesort-obj.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kktam/mergesort-obj
[coveralls-image]: https://coveralls.io/repos/kktam/mergesort-obj/badge.svg
[coveralls-url]: https://coveralls.io/r/kktam/mergesort-obj
# mergesort-obj
