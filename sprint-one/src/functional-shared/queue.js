var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.counter = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {}; // What can this be attached to Queue object

queueMethods.enqueue = function (value) {
  this.counter++;
  this.storage[this.counter] = value;
};


queueMethods.dequeue = function () {
  if (this.counter > 0) {
    var returnVal = this.storage[1];
    for (var i = 1; i < this.counter; i++) {
      this.storage[1] = this.storage[i + 1];
    }
    delete this.storage[this.counter];
    this.counter--;
    return returnVal;
  }

};

queueMethods.size = function () {
  return this.counter;
};
