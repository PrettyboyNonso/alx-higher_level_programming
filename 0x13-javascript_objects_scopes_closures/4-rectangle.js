#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let counts = '';
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        counts = counts + 'X';
      }
      console.log(counts);
      counts = '';
    }
  }

  double (w = this.width, h = this.height) {
    this.width = w * 2;
    this.height = h * 2;
  }

  rotate (w = this.width, h = this.height) {
    this.width = h;
    this.height = w;
  }
}

module.exports = Rectangle;
