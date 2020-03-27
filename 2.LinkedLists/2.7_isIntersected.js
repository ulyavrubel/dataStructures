// 2.7 Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

function isIntersected(ll1, ll2) {
  function countLength(ll) {
    let l = 0;
    let current = ll.head;
    while (current) {
      l++;
      current = current.next;
    }
    return l;
  }
  let lengthL1 = countLength(ll1);
  let lengthL2 = countLength(ll2);

  function cutHead(ll, num) {
    let count = 0;
    let current = ll.head;
    while (count < num) {
      ll.head = current.next;
      current = current.next;
      count++;
    }
  }

  if (lengthL1 > lengthL2) {
    let dif = lengthL1 - lengthL2;
    cutHead(ll1, dif);
  } else if (lengthL2 > lengthL1) {
    let dif = lengthL2 - lengthL1;
    cutHead(ll2, dif);
  }

  let current1 = ll1.head;
  let current2 = ll2.head;
  let count = 0;
  let hash = {};

  while (current1) {
    if (current1.data === current2.data) {
      hash[count] = { equal: true, node: current1 };
    } else {
      hash[count] = { equal: false };
    }
    count++;
    current1 = current1.next;
    current2 = current2.next;
  }

  let countTrue = 0;
  for (let i = count - 1; i >= 0; i--) {
    if (hash[i].equal === true) {
      break;
      countTrue++;
    }
  }
  console.log(countTrue);
  if (countTrue > 1) {
    return hash[count - countTrue].node;
  } else {
    return false;
  }
}

let list1 = new LinkedList();
list1.addFirst(100);
list1.addFirst(200);
list1.addFirst(300);
list1.addFirst(400);
list1.addFirst(500);

list1.printData();

let list2 = new LinkedList();
list2.addFirst(100);
list2.addFirst(900);
list2.addFirst(300);
list2.addFirst(700);
list2.addFirst(800);
list2.addFirst(900);

list2.printData();

isIntersected(list1, list2);
