class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    let node = new Node(data);
    let current = this.head;
    this.head = node;
    this.head.next = current;
    this.size++;
  }

  addLast(data) {
    if (this.head === null) {
      this.addFirst(data);
    } else {
      let count = 0;
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }

  //insert at index
  insertAt(data, index) {
    //if index does not exist
    if (index > 0 && index > this.size) {
      return;
    }
    //if first index
    if (index === 0) {
      insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before the index
      count++;
      current = current.next; //node after the index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return;
  }

  //get first
  getFirst() {
    console.log(this.head.data);
  }

  //getLast
  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    console.log(current.data);
  }

  //get middle, if even number second of to middle
  getMiddle() {
    if (this.size === 0) {
      return;
    }

    let index;
    if (this.size % 2 === 1) {
      index = (this.size - 1) / 2;
    } else {
      index = this.size / 2;
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log(current.data);
  }

  //remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //clear the LinkedList
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print the list data
  printListData() {
    let current = this.head;
    console.log("data");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
