//2.4 Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
partition(x) {
    let current = this.head;
    let llNew = new LinkedList();
    while (current) {
      if (current.data < x) {
        llNew.addFirst(current.data);
      } else {
        llNew.addLast(current.data);
      }
      current = current.next;
    }
    return llNew;
  }


