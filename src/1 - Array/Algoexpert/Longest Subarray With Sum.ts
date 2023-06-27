// input : array and targetSum
// what is a subarray ?
// subset of an array that is continuous
// ex : [1,2,3,4] subarray : [1,2] , [3,4] , [2,3,4]
// however , subarray is not [2,4]

// Brute Force Solution
// Solution Technique : Nested For loop

// subarray length
// loop through the array
//      loop thorough the array from current index to the end of the array
//          if the currentSum == targetSum
//              if the size of the subarray is longer than longestSubarray
//                  initialize the index as the longest subarray
// Time Complexity : O(n²) where n is the size of the nums
// Space Complexity : O(1)
const longestSubarrayWithSum = (
  nums: Array<number>,
  targetSum: number
): Array<number> => {
  let longestSubarray: [number, number] = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum == targetSum) {
        if (j - i >= longestSubarray[1] - longestSubarray[0]) {
          longestSubarray = [i, j];
        }
      }
      if (currentSum > targetSum) break;
    }
  }
  if (longestSubarray[0] === -1) return [];
  return longestSubarray;
};

// More efficient Solution
// initialize longestSubarray to [-1,-1]
// set the start index to 0
// initialize to currentSum to 0
// loop through the array
//      currentSum += array[currentIndex]
//       if currentSum > targetSum
//          startIndex + 1
//          currentSum -= array[startIndex]
//      if currentSum === targetSum
//          compare the currentIndex and startIndex with the longestSubarray
//          currentSum -= array[startIndex]
//          startIndex + 1

// Time Complexity = O(n) where n is the size of array
// Space Complexity = O(1)

const longestSubarrayWithSum2 = (
  nums: Array<number>,
  targetSum: number
): Array<number> => {
  let start = 0;
  let currentSum = 0;
  let longestSubarray = [-1, -1];

  for (let end = 0; end < nums.length; end++) {
    currentSum += nums[end];
    while (end >= start && currentSum > targetSum) {
      currentSum -= nums[start];
      start++;
    }
    if (currentSum === targetSum) {
      if (end - start >= longestSubarray[1] - longestSubarray[0]) {
        longestSubarray = [start, end];
      }
    }
  }

  if (longestSubarray[0] === -1) return [];
  return longestSubarray;
};
