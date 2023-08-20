const countPairs = (nums: number[], target: number) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
    }
  }
  return count;
};

// Time Complexity : O(n^2)

// What is the optimal solution

// Sort the array
// Two pointer solution

const countPairs2 = (nums: number[], target: number) => {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  while (left < right) {
    if (nums[left] + nums[right] >= target) {
      right--;
    } else {
      count += right - left;
      left++;
    }
  }
  return count;
};

console.log(countPairs2([-1, 1, 2, 3, 1], 2));
