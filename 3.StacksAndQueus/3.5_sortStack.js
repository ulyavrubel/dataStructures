// 3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and is Empty.

function sortStack(stack) {
  let stack2 = [];

  while (stack.length != 0) {
    let p = stack.pop();

    while (stack2.length != 0 && stack2[stack2.length - 1] > p) {
      stack.push(stack2.pop());
    }
    stack2.push(p);
    console.log(stack);
    console.log(stack2);
  }

  while (stack2.length != 0) {
    stack.push(stack2.pop());
  }

  return stack;
}

sortStack([10, 556, 13, 48, 9, 55]);
