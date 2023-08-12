// Dinner Plate Stacks problem

// Solution works by using an array to store each stack
// But the Time Complexity is not efficient

class DinnerPlates {
  private array: Array<Array<number>> = [];
  private capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  push(val: number): void {
    let isValueAdded = false;
    for (let stack of this.array) {
      if (stack.length != this.capacity) {
        stack.push(val);
        isValueAdded = true;
        break;
      }
    }
    if (isValueAdded == false) {
      this.array.push([val]);
    }
  }

  // Time Complexity : O(n) to move backward till a non empty stack is found
  pop(): number {
    if (this.array.length === 0) return -1;
    let r = this.array.length - 1;
    while (r >= 0 && this.array[r].length === 0) {
      r--;
    }
    let res = -1;
    if (r >= 0) {
      res = this.array[r].pop()!;
    }
    return res;
  }

  // Time Complexity : O(1)
  popAtStack(index: number): number {
    if (index >= this.array.length) {
      return -1;
    }
    const selectedStack = this.array[index];
    if (selectedStack.length === 0) {
      return -1;
    }
    const res = selectedStack.pop()!;
    return res;
  }
}

const testing = () => {
  const operations = [
    "push",
    "push",
    "push",
    "push",
    "push",
    "popAtStack",
    "push",
    "push",
    "popAtStack",
    "popAtStack",
    "pop",
    "pop",
    "pop",
    "pop",
    "pop",
  ];
  const value = [
    [1],
    [2],
    [3],
    [4],
    [7],
    [8],
    [20],
    [21],
    [0],
    [2],
    [],
    [],
    [],
    [],
    [],
  ];

  const d = new DinnerPlates(2);
  for (let i = 0; i < operations.length; i++) {
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
``