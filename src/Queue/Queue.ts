class LinkedListNode {
  value: number;
  next: LinkedListNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value: number) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  shift() {
    let removedValue: number | null = null;
    if (this.head) {
      removedValue = this.head.value;
      this.head = this.head.next;
      if (this.head === null) this.tail = null;
    }
    return removedValue;
  }

  print() {
    if (!this.head) return;
    let str = "";
    let currentNode: LinkedListNode | null = this.head;
    while (currentNode) {
      str += currentNode.value + ",";
      currentNode = currentNode.next;
    }
    console.log(str.slice(0, -1));
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
queue.print();
