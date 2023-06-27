// Input : Array of numbers
// Output : length of the longest peak in the array

// Test Case
// If the array of numbers do not contain a peak , return 0

// Pseudo Code

// [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
// main idea : find the peak points
// using the peak point move outwards to find the length of the peak
const longestPeak = (nums: Array<number>): number => {
  const peakMap: number[] = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peakMap.push(i);
    }
  }
  let peakLen = 0;
  for (let num of peakMap) {
    let [start, end] = [num, num];
    while (start >= 0 && nums[start] > nums[start - 1]) {
      start--;
    }
    while (end < nums.length && nums[end] > nums[end + 1]) {
      end++;
    }
    peakLen = Math.max(end - start + 1, peakLen);
  }
  return peakLen;
};
// However , note that this algorithm is uses extra space
// Time complexity : O(n) where n is the length of array
// Space Complexity : O(n) where n is peak points of the array

// more optimised solution is instead of storing the peak points inside a array to find the length of peak , just find the length of peak directly when the peak is found

const longestPeak2 = (nums: Array<number>): number => {
  let maxPeakLen = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      let [start, end] = [i, i];
      while (start >= 0 && nums[start] > nums[start - 1]) {
        start--;
      }
      while (end < nums.length && nums[end] > nums[end + 1]) {
        end++;
      }
      maxPeakLen = Math.max(end - start + 1, maxPeakLen);
    }
  }
  return maxPeakLen;
};
// Time complexity : O(n) where n is the length of array
// Space complexity : O(1)
