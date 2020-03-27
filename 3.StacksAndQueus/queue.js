// Queue using array

function Queue() {
  collection = [];

  this.print = function() {
    console.log(collection);
  };

  this.enqueue = function(element) {
    collection.push(element);
  };

  //first item of the array
  this.dequeue = function() {
    return collection.shift();
  };

  //return first item of the array without removing this item
  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
q.print();
q.front();

// Queue as an Object
let Queue = function() {
  this.count = 0;
  this.storage = {};

  //add item to the end of the queue
  this.add = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //remove the first item in the queue
  this.remove = function() {
    for (let i = 0; i < this.count - 1; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.count - 1];
    this.count--;
  };

  //return the first item without removing
  this.front = function() {
    return this.storage[0];
  };

  this.size = function() {
    return this.count;
  };

  this.empty = function() {
    return this.count === 0;
  };
};

let qq = new Queue();
qq.add("a");
qq.add("b");
qq.add("c");
qq.add("d");
console.log(qq);
qq.remove();
console.log(qq);
