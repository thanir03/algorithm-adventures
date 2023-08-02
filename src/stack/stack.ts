export class Stack<T = number> {
  private stack: Array<T> = [];

  constructor() {
    this.stack = [];
  }

  print() {
    console.log(this.stack);
  }

  push(value: T) {
    this.stack.push(value);
  }
  pop() {
    if (this.isEmpty()) throw new Error("Stack is Empty");
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) throw new Error("Stack is Empty");
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
