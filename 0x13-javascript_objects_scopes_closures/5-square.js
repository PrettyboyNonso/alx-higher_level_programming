#!/usr/bin/node
const Rectangle = require('./4-rectangle');
class Square extends Rectangle {
 constructor (size) {
   super(w, h);
   this.width = this.size;
   this.height = this.size;
 }
}

module.exports = Square;
