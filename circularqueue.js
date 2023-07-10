class CircularQueue {
  constructor(capacity) {
    this.itemes = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }
  
  enqueu(el) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.itemes[this.rear] = el;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.itemes[this.front];
    this.itemes[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }

  peak() {
    if (!this.isEmpty()) {
      return this.itemes[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.itemes[i] + " ";
      }
      str += this.itemes[i];
      console.log(str);
    }
  }
}

const circularqueue = new CircularQueue(5);

console.log(circularqueue.isEmpty());

circularqueue.enqueu(10)
circularqueue.enqueu(20)
circularqueue.enqueu(30)
circularqueue.enqueu(40)
circularqueue.enqueu(50)

console.log(circularqueue.isFull());
circularqueue.print();

circularqueue.dequeue();
circularqueue.print();

circularqueue.enqueu(60);
circularqueue.print();