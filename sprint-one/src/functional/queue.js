var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  //var storage = {};
  //var counter = 0;
  someInstance.storage = {};
  someInstance.counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.counter++;
    someInstance.storage[someInstance.counter] = value;

  };

  someInstance.dequeue = function() {
    if (someInstance.counter > 0) {
      someInstance.popVal = someInstance.storage[1];

      for (var i = 1; i < someInstance.counter; i++) {
        someInstance.storage[i] = someInstance.storage[i + 1];
      }

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
