// Sort the array

// Time Complexity : O(n^2)
const maxSum = (nums: number[]) => {
  let maxPairSum = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (getMaxDigit(nums[i]) === getMaxDigit(nums[j])) {
        maxPairSum = Math.max(nums[i] + nums[j], maxPairSum);
      }
    }
  }
  return maxPairSum;
};

const getMaxDigit = (num: number) => {
  let max = -Infinity;
  while (num > 0) {
    let digit = num % 10;
    max = Math.max(digit, max);
    num = Math.floor(num / 10);
  }
  return max;
};

// More optimized version using O(n^2) time complexity
// without additional nested loop
// another solution is using a bucket array
// if your key of hashmap is a number , maybe consider using a bucket of array which stores the value instead of using a hashmap
const maxSum2 = (nums: number[]) => {
  const hashMap: { [key: number]: number } = {};
  let maxSum = -1;
  for (let i = 0; i < nums.length; i++) {
    let maxDigit = getMaxDigit(nums[i]);
    if (maxDigit in hashMap) {
      maxSum = Math.max(nums[hashMap[maxDigit]] + nums[i], maxSum);
      if (nums[i] > nums[hashMap[maxDigit]]) {
        hashMap[maxDigit] = i;
      }
    } else {
      hashMap[maxDigit] = i;
    }
  }
  return maxSum;
};

console.log(maxSum2([1, 2, 3, 4]));
