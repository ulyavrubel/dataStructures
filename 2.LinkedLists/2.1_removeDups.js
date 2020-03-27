//2.1Remove Dups! Write code to remove duplicates from an unsorted linked listv remove with buffer
function removeDups() {
  let arr = [];
  let newList = new LinkedList();
  let current = this.head;

  while (current) {
    if (!arr.includes(current.data)) {
      arr.push(current.data);
      if (!newList.head) {
        newList.insertFirst(current.data);
      } else {
        newList.insertLast(current.data);
      }
    }
    current = current.next;
  }

  newList.printListData();
  return newList;
}

function removeDupsInPlace() {
  let prev = this.head;
  let current = this.head.next;
  let hash = {};
  hash[prev.data] = true;

  while (current) {
    if (!hash[current.data]) {
      hash[current.data] = true;
    } else {
      prev.next = current.next;
      this.size--;
    }
    prev = current;
    current = current.next;
  }
  console.log(hash);
}
