//  132 pattern
//  ijk where j > k > i
// if this pattern is found return true
// but the question wants subsequence of elements that satisfy this 132 pattern
// elements that are in order that satisfies 132 pattern

// Brute force solution
const find132pattern = (nums: number[]) => {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] > nums[k] && nums[k] > nums[i]) return true;
      }
    }
  }
  return false;
};

// Time complexity : O(n^3)
// Space complexity : O(1)
// console.log(find132pattern([1, 3, 9, 6, 5]));

// Optimal solution

// using a stack to store the previously encountered numbers in descending order

// Stack is to store the j value (the highest value)

// Find the maximum possible value for k to ensure that k is lower than i
// However , we need to compare it with j so that k value is

const find132pattern2 = (nums: number[]) => {
  const lowest = []; // carries the i value
  const stack: number[] = []; // carries the potential k value
  let currLowest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    lowest[i] = currLowest;
    currLowest = Math.min(currLowest, nums[i]);
  }

  //  iterating the j value
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] > stack[stack.length - 1]) {
      while (stack.length > 0 && nums[j] > stack[stack.length - 1]) {
        const kValue = stack.pop()!;
        if (kValue > lowest[j]) return true;
      }
    }
    stack.push(nums[j]);
  }
  return false;
};

const find132Pattern3 = (nums: number[]): boolean => {
  // using stack to track the j element (highest element)
  // monotonic decreasing
  // tracking highest j values and min value of each j value
  const stackJ: [number, number][] = []; // [j , i]
  let min = Infinity;
  for (let k = 0; k < nums.length; k++) {
    while (stackJ.length > 0 && nums[k] > stackJ[stackJ.length - 1][0]) {
      stackJ.pop();
    }
    // now we have could have possibly encountered higher element
    if (
      stackJ.length > 0 &&
      stackJ[stackJ.length - 1][0] > nums[k] &&
      nums[k] > stackJ[stackJ.length - 1][1]
    ) {
      return true;
    }
    stackJ.push([nums[k], min]);
    min = Math.min(nums[k], min);
  }
  return false;
};

const testcase = [1, -1, 1, -4, 0];
console.log(find132Pattern3(testcase));
