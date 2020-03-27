//2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

function sumLists(ll1, ll2) {
  function getArr(ll) {
    let arr = [];
    let cur = ll.head;
    while (cur) {
      arr.push(cur.data);
      cur = cur.next;
    }
    return arr;
  }

  function arrToNumber(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return Number(newArr.join(""));
  }

  let arr1 = getArr(ll1);
  let arr2 = getArr(ll2);

  let result = arrToNumber(arr1) + arrToNumber(arr2);
  let resultArr = result.toString().split("");
  let resultLL = new LinkedList();

  for (let i = 0; i < resultArr.length; i++) {
    resultLL.addFirst(resultArr[i]);
  }
  return resultLL;
}

let list1 = new LinkedList();
list1.addLast(7);
list1.addLast(1);
list1.addLast(6);
list1.printData();

let list2 = new LinkedList();
list2.addLast(5);
list2.addLast(9);
list2.addLast(2);
list2.printData();

sumLists(list1, list2);
