var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};


//push
Stack.prototype.push = function (value) {
  this.counter++;
  this.storage[this.counter] = value;
};


//pop
Stack.prototype.pop = function () {
  if (this.counter > 0) {
    var returnVal = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return returnVal;
  }
};


//size
Stack.prototype.size = function () {
  return this.counter;
};