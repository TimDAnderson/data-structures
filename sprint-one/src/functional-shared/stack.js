var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.counter = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

//var stackMethods = {}; <- This was given to me at start


var stackMethods = {};
stackMethods.push = function (value) {
  this.counter ++;
  this.storage[this.counter] = value;
};

stackMethods.pop = function () {
  if (this.counter > 0) {
    var returnVal = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return returnVal;
  }
};

stackMethods.size = function () {
  return this.counter;
};