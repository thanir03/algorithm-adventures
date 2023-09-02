// Question 3 of leetcode contest

// find the element

// If there isnt any element higher than target , return -1
// If there is a closest higher element to the target , divide that element and add twice to the end of the nums array

function minOperations(nums: number[], target: number) {
  let hasHigher = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      hasHigher = true;
      break;
    }
  }
  if (!hasHigher) return -1;

  let hasTotal = false;
  let count = 0;
  while (!hasTotal) {
    const closestElementIndex = findClosestElement(nums, target);
    const num = nums[closestElementIndex];
    if (num === target) {
      return count;
    }
    nums.splice(closestElementIndex, 1);
    nums.push(num / 2);
    nums.push(num / 2);
    hasTotal = findTotal(nums, target);
    count++;
  }
  return count;
}

function findClosestElement(nums: number[], target: number) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - target) < Math.abs(nums[index] - target)) {
      index = i;
    } else if (nums[i] === target) {
      return i;
    }
  }
  return index;
}

const findTotal = (
  nums: number[],
  target: number,
  idx: number = 0,
  curTotal: number = 0
): boolean => {
  if (curTotal === target) return true;
  if (idx === nums.length) return false;

  let hasTotal = false;
  if (curTotal + nums[idx] <= target) {
    hasTotal ||= findTotal(nums, target, idx + 1, curTotal + nums[idx]);
  }
  hasTotal ||= findTotal(nums, target, idx + 1, curTotal);
  return hasTotal;
};

console.log(minOperations([16, 128, 32], 35));

// If the total is less than  target , return -1

