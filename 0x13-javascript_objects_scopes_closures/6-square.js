#!/usr/bin/node
const inheritSquare = require('./5-square');
class Square extends inheritSquare {
  charPrint (c) {
    if (c) {
      for (let i = 0; i < this.height; i++) {
      let temp = '';
      for (let j = 0; j < this.height; j++) {
        temp = temp + c;
      }
      console.log(temp)
    }
    } else {
      super.print();
    }
    
  }
}

module.exports = Square;
