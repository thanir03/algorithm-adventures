class Heap {
  getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }
}

class MaxHeap {
  array: number[] = [];

  // Heapify down
  insert(value: number) {
    this.array.push(value);
    let i = this.array.length - 1;
    while (
      i > 0 &&
      this.getParent(i) >= 0 &&
      this.array[i] > this.array[this.getParent(i)]
    ) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }

  // Heapify up
  deleteMax(): number {
    if (this.array.length === 0) return -1;
    this.swap(0, this.array.length - 1);
    const maxValue = this.array.pop()!;
    let i = 0;
    while (
      i < this.array.length &&
      ((this.getLeft(i) < this.array.length &&
        this.array[i] < this.array[this.getLeft(i)]) ||
        (this.getRight(i) < this.array.length &&
          this.array[i] < this.array[this.getRight(i)]))
    ) {
      if (this.array[this.getLeft(i)] >= this.array[this.getRight(i)]) {
        this.swap(i, this.getLeft(i));
        i = this.getLeft(i);
      } else if (this.array[this.getLeft(i)] < this.array[this.getRight(i)]) {
        this.swap(i, this.getRight(i));
        i = this.getRight(i);
      } else {
        this.swap(i, this.getLeft(i));
        i = this.getLeft(i);
      }
    }
    console.log(maxValue);
    return maxValue;
  }
  print() {
    console.log(this.array);
  }

  private getLeft(i: number) {
    return 2 * i + 1;
  }

  private getRight(i: number) {
    return 2 * i + 2;
  }

  private getParent(i: number) {
    return Math.floor((i - 1) / 1);
  }
  private swap(i: number, j: number) {
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
  }
}

class MinHeap {
  heap: Array<number> = [];

  insert(val: number) {
    this.heap.push(val);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    // moving upwards in the heap
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  deleteMin(): number {
    if (this.heap.length === 0) return -1;
    this.swap(0, this.heap.length - 1);
    const minValue = this.heap.pop()!;
    let currentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);
    let smallest = currentIndex;
    let length = this.heap.length;
    // move downwards from rootNode (heapify down)
    while (currentIndex < length) {
      smallest = currentIndex;
      if (
        leftChildIndex < length &&
        this.heap[smallest] > this.heap[leftChildIndex]
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[smallest] > this.heap[rightChildIndex]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === currentIndex) break;
      this.swap(currentIndex, smallest);
      currentIndex = smallest;
      leftChildIndex = this.getLeftChildIndex(currentIndex);
      rightChildIndex = this.getRightChildIndex(currentIndex);
    }

    return minValue;
  }

  getMin() {
    return this.heap[0];
  }

  swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

export { MinHeap, MaxHeap };
