//2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
function deleteMiddleNnode(n) {
  if (n < 0 || n === 0) {
    return console.log("n out of range");
  }
  let count = 0;
  let current = this.head;
  let prev = null;

  while (count < n) {
    prev = current;
    current = current.next;
    count++;
  }

  if (current.next != null) {
    prev.next = current.next;
  } else {
    return console.log("n should not be the last");
  }
}
