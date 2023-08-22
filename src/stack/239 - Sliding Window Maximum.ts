// Assume that k can be more than array length
// k is length of the sliding window

// Naive Brute Force Solution : O(n x k)

const maxSlidingWindow = (nums: number[], k: number) => {
  const res: number[] = [];
  if (k >= nums.length) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      max = Math.max(max, nums[i]);
    }
    res.push(max);
  } else {
    for (let i = 0; i <= nums.length - k; i++) {
      let max: number = nums[i];
      for (let j = i + 1; j < k + i; j++) {
        max = Math.max(nums[j], max);
      }
      res.push(max);
    }
  }
  return res;
};

// How to solve in more optimally in one pass or O(n)

const maxSlidingWindow2 = (nums: number[], k: number) => {
  const stack: number[] = []; // storing index of potential highest digit
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (stack.length > 0 && nums[i - k] === nums[stack[0]]) {
      // removing the first element only if the highest element in the stack is outside the current range
      stack.shift();
    }

    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      stack.pop();
    }

    stack.push(i);
    if (i >= k - 1) {
      res.push(nums[stack[0]]);
    }
  }
  return res;
};

console.log(maxSlidingWindow2([1, -1], 1));
