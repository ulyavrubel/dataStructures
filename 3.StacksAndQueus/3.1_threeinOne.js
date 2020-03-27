//3.1 Three in One: Describe how you could use a single array to implement three stacks

class MultiStack {
  constructor(stackSize) {
    this._stackCapacity = stackSize;
    this.values = [];
    this.sizes = [0, 0, 0];
    this.numberOfStacks = 3;
  }

  // the total capacity of each of the stacks
  get stackCapacity() {
    return this._stackCapacity;
  }

  //push val to the top of exact stack
  push(stackNumber, value) {
    if (this.isFull(stackNumber)) {
      return console.log(`the stack ${stackNumber} is already full`);
    }
    this.sizes[stackNumber]++;
    this.values[this.indexOfTop(stackNumber)] = value;

    return console.log(`Item ${value} was added to stack ${stackNumber}`);
  }

  //remove the top item of the exact stack
  pop(stackNumber) {
    if (this.isEmpty(stackNumber)) {
      return console.log(`the stack ${stackNumber} is empty`);
    }
    this.values[this.indexOfTop(stackNumber)] = null;
    this.sizes[stackNumber]--;
    return console.log(`the top item was popped from the stack ${stackNumber}`);
  }

  //return the top item of the stack
  peek(stackNumber) {
    if (this.isEmpty(stackNumber)) {
      return console.log(`the stack ${stackNumber} is empty`);
    }
    return this.values[this.indexOfTop(stackNumber)];
  }

  //boolean is the exact stack has no values
  isEmpty(stackNumber) {
    return this.sizes[stackNumber] === 0;
  }

  //boolean if exact stack is full
  isFull(stackNumber) {
    return this.sizes[stackNumber] === this._stackCapacity;
  }

  //returns index of the top item in the respective stack
  indexOfTop(stackNumber) {
    const offset = stackNumber * this._stackCapacity; //starting point of the exact arr
    const size = this.sizes[stackNumber]; //how many items already there
    return offset + size - 1;
  }
}

let threeStack = new MultiStack(5);
console.log(threeStack);
threeStack.push(0, 5);
console.log(threeStack.values);
threeStack.push(0, 6);
threeStack.push(0, 74);
threeStack.push(0, 22);
console.log(threeStack.values);
threeStack.push(1, 7);
threeStack.push(1, 8);
threeStack.push(2, 3);
threeStack.push(2, 10);
threeStack.push(2, 12);
console.log(threeStack.values);
threeStack.push(0, 74);
threeStack.push(0, 100);
console.log(threeStack.values);
threeStack.pop(1);
console.log(threeStack.values);
