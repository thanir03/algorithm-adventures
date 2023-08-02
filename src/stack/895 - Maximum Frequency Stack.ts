class FreqStack {
  stack: [number, number][];
  hashMap: { [key: string]: number };

  constructor() {
    this.stack = [];
    this.hashMap = {};
  }

  pop() {
    const [num] = this.peek();
    this.hashMap[num]--;
    if (this.hashMap[num] === 0) {
      delete this.hashMap[num];
    }

    const res = this.stack.pop()![0];
    return res;
  }

  push(num: number) {
    if (num in this.hashMap) {
      this.hashMap[num]++;
    } else {
      this.hashMap[num] = 1;
    }

    let tempStack: [number, number][] = [];

    while (this.stack.length > 0 && this.hashMap[num] < this.peek()[1]) {
      tempStack.push(this.stack.pop()!);
    }

    this.stack.push([num, this.hashMap[num]]);

    while (tempStack.length > 0) {
      this.stack.push(tempStack.pop()!);
    }
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

// TIME COMPLEXITY : O(N) because iterating through the popped array
// SPACE COMPLEXITY : O(1) because  store the elements in a stack and a set (uneccesary)

class FreqStack2 {
  arr: number[][];
  hashMap: { [key: string]: number };
  maxFreq: number;

  constructor() {
    this.arr = [];
    this.hashMap = {};
    this.maxFreq = 0; // to track the most freq value in the array to pop at O(1)
  }

  pop() {
    const res = this.arr[this.maxFreq - 1].pop()!;
    this.hashMap[res]--;
    if (this.arr[this.maxFreq - 1].length === 0) {
      this.maxFreq--;
    }
    return res;
  }

  push(num: number) {
    if (num in this.hashMap) {
      this.hashMap[num]++;
    } else {
      this.hashMap[num] = 1;
    }
    if (this.hashMap[num] > this.maxFreq) {
      this.maxFreq = this.hashMap[num];
    }

    if (this.arr[this.hashMap[num] - 1]) {
      this.arr[this.hashMap[num] - 1].push(num);
    } else {
      this.arr[this.hashMap[num] - 1] = [num];
    }
  }
}

// Trick used :
// hashmap to store the frequency of each element
// hashmap to store each occurance of each frequency
// Ex : 1 : [2,4,5] 2 : [5,6,7]
// using a maxCounter to track the most frequent array

const freqStack = new FreqStack2();

freqStack.push(4);
freqStack.push(0);
freqStack.push(9);
freqStack.push(3);
freqStack.push(4);
console.log(freqStack.pop());
freqStack.push(6);
console.log(freqStack.pop());
freqStack.push(1);
console.log(freqStack.pop());
freqStack.push(1);
console.log(freqStack.pop());
freqStack.push(4);
console.log(freqStack.pop());
console.log(freqStack.pop());
console.log(freqStack.pop());
console.log(freqStack.pop());
console.log(freqStack.pop());
