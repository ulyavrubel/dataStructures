// 2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
// as to make a loop in the linked list.

function loopDefenition(ll) {
  let hash = {};
  let current = ll.head;
  let count = 0;

  while (current) {
    if (hash[0] != undefined && Object.values(hash).includes(current)) {
      return current;
    }
    hash[count] = current;
    count++;
    current = current.next;
  }
  return "no loop detected";
}
