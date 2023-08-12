const maxSubarray = (nums: number[]) => {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(sum, max);
    }
  }
  return max;
};

// Time Complexity : O(N^2)
// Space Complexity : O(N^2)
const maxSubarrayWithKadaneAlgorithm = (nums: number[]) => {
  let max = -Infinity;
  let currentMaxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i] + currentMaxSum) {
      currentMaxSum = nums[i];
    } else {
      currentMaxSum += nums[i];
    }
    max = Math.max(currentMaxSum, max);
  }
  return max;
};

// Time Complexity : O(n)
// Space Complexity : O(1)
