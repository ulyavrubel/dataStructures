//2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

function returnKth(k) {
  let count = 0;
  let current = this.head;
  let hash = {};
  while (current) {
    hash[count] = current;
    count++;
    current = current.next;
  }
  let target = count - k;
  return hash[target];
}
