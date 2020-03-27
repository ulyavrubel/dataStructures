//3.3 Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack). FOLLOW UP Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [[]];
    this.sizes = [0];
  }

  //push to the last avaliable space
  pushToSetOfStacks(value) {
    let index = this.sizes.length - 1;
    if (this.sizes[index] < this.capacity) {
      this.stacks[index].push(value);
      this.sizes[index]++;
    } else {
      this.stacks.push([value]);
      this.sizes.push([1]);
    }
  }

  //push to the first avaliable space
  pushToFirstSpace(value) {
    if (this.allFull()) {
      this.stacks.push([value]);
      this.sizes.push([1]);
    } else {
      for (let i = 0; i < this.sizes.length; i++) {
        if (this.sizes[i] < this.capacity) {
          this.stacks[i].push(value);
          this.sizes[i]++;
          return;
        }
      }
    }
  }

  popFromSetOfStacks() {
    if (this.sizes[this.sizes.length - 1] > 1) {
      this.stacks[this.stacks.length - 1].pop();
      this.sizes[this.sizes.length - 1]--;
    } else if (this.sizes[this.sizes.length - 1] === 1) {
      this.stacks.pop();
      this.sizes.pop();
    }
  }

  popAt(index) {
    if (this.sizes[index] > 1) {
      this.stacks[index].pop();
      this.sizes[index]--;
    } else if (this.sizes[index] === 1) {
      this.stacks.splice(index, 1);
      this.sizes.splice(index, 1);
    }
  }

  allFull() {
    let max = this.capacity;
    if (this.sizes.every(item => item === max)) {
      return true;
    }
    return false;
  }
}

let newSet = new SetOfStacks(10);

newSet.pushToSetOfStacks("p");
newSet.pushToSetOfStacks("df");
newSet.pushToSetOfStacks("dgf");
newSet.pushToSetOfStacks("e");
newSet.pushToSetOfStacks("u");
newSet.pushToSetOfStacks("i");
newSet.pushToSetOfStacks("i");
newSet.pushToSetOfStacks("e");
newSet.pushToFirstSpace("100");
newSet.pushToFirstSpace("200");
newSet.pushToFirstSpace("300");
newSet.pushToFirstSpace("y");
newSet.pushToFirstSpace("5");
newSet.pushToFirstSpace("8");
console.log(newSet);

newSet.popAt(1);
newSet.popAt(1);
newSet.popAt(1);
newSet.popAt(1);

console.log(newSet);
newSet.popAt(1);
console.log(newSet);
newSet.pushToFirstSpace("ll");
newSet.pushToFirstSpace("yy");
newSet.pushToFirstSpace("rr");
newSet.pushToFirstSpace("uu");
newSet.pushToFirstSpace("ee");
console.log(newSet);
