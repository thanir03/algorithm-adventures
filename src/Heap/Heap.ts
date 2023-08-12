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

class MinHeap {}

export { MinHeap, MaxHeap };

const heap = new MaxHeap();
