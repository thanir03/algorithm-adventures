// Sorting Three Groups

// Brute Force Solution

// Given an array with nums between 1 to 3
// Ensure the array is in non-descending order
// Perform minimum operations to make the aray non descending

// Ex : [2,1,3,2,1]
//       x   x x
// Ans : 3 because [1,1,1,1,1] non decreasing order
// 3 index need to be changed to make it non decreasing

// Ex :  [1,3,2,1,3,3]
//          x   x
// Ans : [1,2,2,2,3,3] non decreasing order

// Intuition
// Find the partitions of 1 , 2 and 3
// Example : [2,1,3,2]

// i = 4
// j = 0
// k = 0
// |1111||

// i = 0
// j = 4
// k = 4
// |xxxx||

// i = 0
// j = 0
// k = 4
// ||3333|

const minimumOperations = (nums: number[]) => {};
