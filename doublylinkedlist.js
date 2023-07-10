class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value)
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      node.prev = prev;
      prev.next = node;
      this.size++;
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let cur = this.head;
      let values = '';
      while(cur) {
        values += `${cur.value}<->`
        console.log(cur);
        cur = cur.next;
      }
      console.log(values);
    }
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let cur = this.tail;
      let values = '';
      while(cur) {
        values += `${cur.value}<->`;
      }
      console.log(values);
    }
  }
}

const doubleList = new DoublyLinkedList();

console.log('List is empty? ', doubleList.isEmpty());
console.log('List size: ', doubleList.getSize());

doubleList.prepend(30);
doubleList.prepend(20);
doubleList.prepend(10);
doubleList.append(40);
doubleList.append(50);

doubleList.print();

// doubleList.printReverse();

doubleList.removeFromFront();
doubleList.print();

doubleList.removeFromEnd();
doubleList.print();

doubleList.insert(100, 2);
doubleList.print();