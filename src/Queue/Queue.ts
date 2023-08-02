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
      return;
    }
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  shift() {
    if(this.isEmpty()) return null;
    let removedValue: number | null = null;
    if (this.head) {
      removedValue = this.head.value;
      this.head = this.head.next;
    }
    return removedValue;
  }
  getNode(index : number){
    let count =0;
    let currentNode = this.head;
    while(count < index && currentNode){
      count++
    }
    if(currentNode){
      return currentNode.value
    }else return null;

  }

  print() {
    if (!this.head) {
      console.log("")
      return; 
    }
    let str = "";
    let currentNode: LinkedListNode | null = this.head;
    while (currentNode) {
      str += currentNode.value + ",";
      currentNode = currentNode.next;
    }
    console.log(str.slice(0, -1));
  }

  isEmpty(){
    return this.head === null;
    } 
}

export { Queue, LinkedListNode }