// Dinner Plate Stacks problem

import { MinHeap } from "../Heap/Heap.js";

// Solution works by using an array to store each stack
// But the Time Complexity is not efficient

class DinnerPlates {
  private array: Array<Array<number>> = [];
  private capacity: number;
  private heap: MinHeap = new MinHeap(); // to store index of minimum index to be pushed into the array
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  // add value to the left most stack in the array
  push(val: number): void {
    // remove the lowest heap index if the index is not in range
    while (
      this.heap.heap.length > 0 &&
      this.heap.getMin() > this.array.length - 1
    ) {
      this.heap.deleteMin();
    }
    // if minimum index in heap exist
    if (!this.heap.isEmpty()) {
      const minIndex = this.heap.getMin();
      this.array[minIndex].push(val);
      if (this.array[minIndex].length === this.capacity) {
        this.heap.deleteMin();
      }
      return;
    }
    // if the last array is not full
    if (
      this.array.length > 0 &&
      this.array[this.array.length - 1].length < this.capacity
    ) {
      this.array[this.array.length - 1].push(val);
      return;
    }
    // addding a new stack
    this.array.push([val]);
  }

  // pop the rightMost stack which is not empty
  pop(): number {
    if (this.array.length === 0) {
      console.log(-1);
      return -1;
    }
    // if the array length is zero in the end , remove those stacks
    while (
      this.array.length > 0 &&
      this.array[this.array.length - 1].length === 0
    ) {
      this.array.pop();
    }
    let res = -1;
    // if the elements exist in the array , then pop the last element of the array
    if (this.array.length > 0) {
      res = this.array[this.array.length - 1].pop()!;
      if (this.array[this.array.length - 1].length === 0) {
        this.array.pop();
      }
    }
    return res;
  }

  // pop the stack at the index
  popAtStack(index: number): number {
    if (index >= this.array.length) {
      return -1;
    }
    const selectedStack = this.array[index];
    if (selectedStack.length === 0) {
      return -1;
    }
    if (selectedStack.length === this.capacity) {
      this.heap.insert(index);
    }
    const res = selectedStack.pop()!;
    return res;
  }
}

const testing = () => {
  const operations = [
    "push",
    "push",
    "popAtStack",
    "pop",
    "push",
    "push",
    "pop",
    "pop",
  ];
  const value = [[1], [2], [1], [], [1], [2], [], []];
  const d = new DinnerPlates(1);
  for (let i = 0; i < operations.length; i++) {
    console.log("Operation : ", i + 1);
    if (operations[i] === "push") {
      d.push(value[i][0]);
    } else if (operations[i] === "popAtStack") {
      d.popAtStack(value[i][0]);
    } else {
      d.pop();
    }
  }
};

testing();
