class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }


  //enqueue
  enqueue (value) {
    this.counter++;
    this.storage[this.counter] = value;
  }

  //dequeue
  dequeue () {
    if (this.counter > 0) {
      var returnVal = this.storage[1];
      for (var i = 1; i < this.counter; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      delete this.storage[this.counter];
      this.counter--;
      return returnVal;
    }
  }

  //size
  size () {
    return this.counter;
  }


}
