//3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.

class Stack {
  constructor() {
    this.collection = [];
  }

  pushToStack(value) {
    if (this.collection.length === 0) {
      this.collection.push({
        data: value,
        min: value
      });
    } else {
      if (value < this.collection[this.collection.length - 1].min) {
        this.collection.push({
          data: value,
          min: value
        });
      } else {
        this.collection.push({
          data: value,
          min: this.collection[this.collection.length - 1].min
        });
      }
    }
  }

  popfromStack() {
    this.collection.pop();
  }

  minStack() {
    return this.collection[this.collection.length - 1].min;
  }
}

let stack = new Stack();

stack.pushToStack(67);
stack.pushToStack(17);
stack.pushToStack(80);
stack.pushToStack(67);
stack.pushToStack(13);
stack.pushToStack(90);

console.log(stack);

stack.minStack();
