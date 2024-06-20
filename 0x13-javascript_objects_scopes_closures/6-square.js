#!/usr/bin/node
const inheritSquare = require('./5-square');
class Square extends inheritSquare {
  constructor (size) {
    super(size, size);
  }

  charPrint (c = 'X') {
    for (let i = 0; i < this.size; i++) {
      let temp = '';
      for (let j = 0; j < this.size; j++) {
        temp = temp + c;
      }
      console.log(temp)
    }
  }
}

module.exports = Square;
