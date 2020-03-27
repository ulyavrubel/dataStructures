//creating stack
let Stack = function() {
  this.count = 0;
  this.storage = {};

  //adding value to the end of a stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //remove and return the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };

  //return the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack);

myStack.pop();

console.log(myStack);
console.log(myStack.size());
console.log(myStack.peek());
