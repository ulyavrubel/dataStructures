// 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  addToQueue(value) {
    this.stack1.push(value);
  }

  deQueue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return "Queue is empty";
      }
      while (this.stack1.length > 0) {
        let p = this.stack1.pop();
        this.stack2.push(p);
      }
    }
    return this.stack2.pop();
  }
}

let qq = new MyQueue();

qq.addToQueue("first");
qq.addToQueue("34");
qq.addToQueue("fi56rst");
qq.addToQueue("fg");
qq.addToQueue("9");

console.log(qq);

qq.deQueue();
console.log(qq);

qq.addToQueue("pop");
qq.addToQueue("aaa");
qq.addToQueue("rrr");
qq.addToQueue("ddd");

console.log(qq);

qq.deQueue();
console.log(qq);
