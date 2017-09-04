# mergesort-obj [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> merge sort with objects support

## Installation

```sh
$ npm install --save mergesort-obj
```

## Usage

```js
const mergesortObj = require('mergesort-obj');

// define a sorting function
var sortAsc = function (node1, node2) {
  if (node1 < node2) {
    return mergesortObj.CMP_LESS_THAN;
  } else if (node1 === node2) {
    return mergesortObj.CMP_EQUAL;
  }
  return mergesortObj.CMP_GREATER_THAN;
};

// define an array
var elm = [3, 2, 1];

// sort the array
var results = mergesortObj.sort(elm, sortAsc);

foreach (var item in results) {
    console.log(item);
}
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
