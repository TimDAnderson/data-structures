var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //var storage = {};
  someInstance.storage = {};
  someInstance.counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.counter++;
    someInstance.storage[someInstance.counter] = value;
  };

  someInstance.pop = function() {
    if (someInstance.counter > 0) {
      someInstance.popVal = someInstance.storage[someInstance.counter];
      delete someInstance.storage[someInstance.counter];
      someInstance.counter--;
      return someInstance.popVal;
    }
  };

  someInstance.size = function() {
    return someInstance.counter;
  };

  return someInstance;
};
