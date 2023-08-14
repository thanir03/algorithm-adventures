// Time Complexity : O(N^2)

const minAbsoluteDifference = (nums: Array<number>, x: number) => {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + x; j < nums.length; j++) {
      min = Math.min(Math.abs(nums[i] - nums[j]), min);
    }
  }
  return min;
};

console.log(minAbsoluteDifference([5, 3, 2, 10, 15], 1));
