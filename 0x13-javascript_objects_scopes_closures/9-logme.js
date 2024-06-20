#!/usr/bin/node
exports.logMe = function (item) {
  let count = 0;
  function inner () {
    console.log(count + ':' item);
    count++
  }
  return inner
}
