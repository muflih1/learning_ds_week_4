class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
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
      this.prepend(value)
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let deleted = prev.next;
      prev.next = deleted.next;
    }
    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    let prev = this.head;
    while(prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    let deleted = prev.next;
    prev.next = deleted.next;
    this.size--;
    return deleted;
  }

  reverse() {
    let prev = null;
    let cur = this.head;
    this.tail = cur;
    this.tail.next = null;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    this.head = this.head.next;
    this.size--;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      let prev = this.head;
      while(prev.next.value !== this.tail.value) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
  }

  search(value) {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let cur = this.head;
      let i = 0;
      while(cur) {
        if (cur.value === value) {
          return i;
        }
        i++;
        cur = cur.next;
      }
      return -1;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let values = '';
      while(curr) {
        values += `${curr.value} `;
        curr = curr.next;
      }
      console.log(values);
    }
  }
}

// module.exports = LinkedList;

const list = new LinkedList();

console.log('List is empt: ', list.isEmpty());
console.log('Size of list: ', list.getSize());

list.prepend(30);
list.prepend(20);
list.prepend(10);
list.append(40);
list.append(50);
list.print();
console.log(list.search(50));

// list.removeFromFront();
// list.print();

// list.removeFromEnd();
// list.print();

// list.insert(100, 2);
// list.print();

// list.removeFrom(1);
// list.print();

// list.removeValue(100);
// list.print();

// list.append(10);
// list.append(30);
// list.print();

// list.reverse();
// list.print();