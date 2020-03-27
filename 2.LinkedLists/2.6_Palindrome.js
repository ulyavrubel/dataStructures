// 2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

function isPalindrome(ll) {
  //count list length
  let count = 0;
  let cur = ll.head;
  while (cur) {
    count++;
    cur = cur.next;
  }

  //odd or even
  let index;
  let odd;
  if (count % 2 === 0) {
    index = count / 2;
    odd = false;
  } else {
    index = (count - 1) / 2;
    odd = true;
  }

  let newLL = new LinkedList();
  cur = ll.head;
  count = 0;
  let halfCur;

  while (cur) {
    while (count < index) {
      newLL.addFirst(cur.data);
      halfCur = newLL.head;
      cur = cur.next;
      count++;
    }

    if (odd) {
      cur = cur.next;
      odd = false;
    }

    if (halfCur.data === cur.data) {
      console.log(cur.data, halfCur.data);
      cur = cur.next;
      halfCur = halfCur.next;
    } else {
      console.log(cur.data, halfCur.data);
      return false;
    }
  }

  return true;
}

let palindromeLL = new LinkedList();
palindromeLL.addFirst("p");
palindromeLL.addFirst("a");
palindromeLL.addFirst("l");

palindromeLL.addFirst("l");
palindromeLL.addFirst("a");
palindromeLL.addFirst("p");
palindromeLL.printData();

isPalindrome(palindromeLL);
