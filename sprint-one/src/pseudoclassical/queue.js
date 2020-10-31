var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function (value) {
  this.counter++;
  this.storage[this.counter] = value;

};

Queue.prototype.dequeue = function () {
  if (this.counter > 0) {
    var returnVal = this.storage[1];
    for (var i = 1; i < this.counter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.counter];
    this.counter--;
    return returnVal;
  }
};

Queue.prototype.size = function () {
  return this.counter;
};