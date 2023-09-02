// Find the longest matching prefix ( starting alphabets )
// Find the smallest higher element to current number
// swap the selected number in the element to the smallest higher elements ,and reverse the array starting from selected number + 1

const nextPermutation = (nums: number[]) => {
  let longestMatchingPrefix = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      longestMatchingPrefix = i;
      break;
    }
  }

  if (longestMatchingPrefix === -1) {
    nums.reverse();
    return;
  }

  console.log(nums[longestMatchingPrefix]);

  for (let i = nums.length - 1; i > longestMatchingPrefix; i--) {
    if (nums[i] > nums[longestMatchingPrefix]) {
      swap(nums, i, longestMatchingPrefix);
      break;
    }
  }

  reverseArray(nums, longestMatchingPrefix + 1, nums.length - 1);

  console.log(nums);
};

const reverseArray = (arr: number[], i: number, j: number) => {
  let left = i;
  let right = j;
  while (left <= right) {
    swap(arr, left, right);
    left++;
    right--;
  }
};

const swap = (nums: number[], i: number, j: number) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};

nextPermutation([2, 1, 5, 4, 0, 0]);

// Time Complexity : O(n)
// Space Complexity: O(n)

export {};
