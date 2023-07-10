const LinkedList = require('./linkedlist');

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    this.list.removeFromFront();
  }

  peak() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();

console.log(stack.isEmpty());

stack.push(30);
stack.push(20);
stack.push(10);

console.log(stack.getSize());

stack.print();

stack.pop();
console.log(stack.peak());
stack.print();