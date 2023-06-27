// given the array of numbers , return the start and end indices that needed to be sorted to ensure the entire array is sorted

// main idea for subarray sort
// find the highest unsorted value and lowest unsorted value
// find the index where the lowest unsorted value supposed to be placed in the array
// find the index where the highest unsorted value supposed to be placed in the array

// Pseudo code
// lowestUnsorted , highestUnsorted
// loop through the array with index (i)
//      if array[i] < array[i-1]
//          lowestUnsorted = min (array[i] , lowestUnsorted)
//          highestUnsorted = max(array[i-1] , highestUnsorted)=
// lowestIdx , highestIdx = [-1,-1]
// loop through the array with index (i)
// if array[i] >= lowestUnsorted
//  lowestIdx = i

// loop through the array with index (i) in reverse order
// if array[i] <= highestUnsorted
//  highestIdx = i

const subarraySort = (nums: Array<number>) => {
  let lowestUnsorted = Infinity;
  let highestUnsorted = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      lowestUnsorted = Math.min(lowestUnsorted, nums[i]);
      highestUnsorted = Math.max(highestUnsorted, nums[i - 1]);
    }
  }

  let [lowestIdx, highestIdx] = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > lowestUnsorted) {
      lowestIdx = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < highestUnsorted) {
      highestIdx = i;
      break;
    }
  }
  return [lowestIdx, highestIdx];
};

// Time Complexity : O(n) where n is the size of the array
// Space Complexity : O(1)
