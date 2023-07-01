import { BinaryTree } from "../Binary Tree/index.js";

// Given number of nodes in binary tree , find number of combination of binary tree

// nodeCount = 3

//   1
//  /  \
// 2    3

//      1
//    /
//   2
//  /
// 3

//    1
//  /
// 2
//  \
//   3

//   1
//     \
//      2
//       \
//        3

//   1
//     \
//      2
//    /
//   3

// Approach

// Find the number of possible subtrees in a tree
// The idea is to find the total combination of the left subtree with x nodes and multiply it with the total combination of right subtree

// Ex : node = 5
// 0 + 4
// 1 + 3
// 2 + 2
// 3 + 1
// 4 + 0

type Memoized = { [key: number]: number };
const memoized: Memoized = {};

const numberOfBinaryTree = (n: number): number => {
  if (n in memoized) return memoized[n];
  if (n === 0 || n === 1) return 1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const left = numberOfBinaryTree(i);
    const right = numberOfBinaryTree(n - 1 - i);
    memoized[i] = left;
    memoized[n - 1 - i] = right;
    count += left * right;
  }
  return count;
};

console.log(numberOfBinaryTree(5));
