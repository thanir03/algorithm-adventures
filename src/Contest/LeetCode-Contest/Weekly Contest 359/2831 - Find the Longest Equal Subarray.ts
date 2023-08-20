// Brute Force Solution
// Time Complexity : O(n^2)
// Space Complexity : O(1)

const longestEqualSubarray = (nums: number[], k: number) => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let kDup = k;
    for (let j = i + 1; j < nums.length; j++) {
      if (kDup < 0) break;
      if (nums[j] === nums[i]) count++;
      else {
        kDup--;
      }
    }
    max = Math.max(count, max);
  }
  return max;
};

// Sliding Window Solution
// Time Complexity : O(n)
// Space Complexity : O(n)

const longestEqualSubarray2 = (nums: number[], k: number) => {
  let max = 0;
  let hashMap: { [key: string]: number[] } = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      hashMap[nums[i]].push(i);
    } else {
      hashMap[nums[i]] = [i];
    }
  }

  const entries = Object.entries(hashMap);

  // Sliding window using left and right pointers
  // if the k value is less than 0 , increment the left pointer till the k value is positive

  for (let [_, arr] of entries) {
    let left = 0;
    let kDuplicate = k;

    for (let right = 1; right < arr.length; right++) {
      let len = arr[right] - arr[right - 1] - 1;
      kDuplicate -= len;

      if (kDuplicate < 0) {
        max = Math.max(right - left, max);
        while (kDuplicate < 0) {
          kDuplicate += arr[left + 1] - arr[left] - 1;
          left++;
        }
      }
    }
    max = Math.max(arr.length - left, max);
  }
  return max;
};
