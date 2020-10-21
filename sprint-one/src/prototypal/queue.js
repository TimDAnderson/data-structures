var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.counter = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.counter++;
  this.storage[this.counter] = value;

};

queueMethods.dequeue = function () {
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

queueMethods.size = function () {
  return this.counter;
};