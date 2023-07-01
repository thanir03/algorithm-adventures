class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  constructor(
    value: number,
    leftNode: BinaryTree | null = null,
    rightNode: BinaryTree | null = null
  ) {
    this.value = value;
    this.left = leftNode;
    this.right = rightNode;
  }
}

export { BinaryTree };
