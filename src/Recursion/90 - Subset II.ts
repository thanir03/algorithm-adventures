// Recursive method 1
// Whether to include or not
// Time complexity : O(n * 2^n)
// Idea : If there is duplicates , we are just gonna move forward if there are duplicates ,
// just move forward in the array instead of calling trying to include or exclude the recursive calls

function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const subsets: number[][] = [];
  helper(nums, [], subsets, 0);
  return subsets;
}

function helper(
  nums: number[],
  curSubset: number[],
  subsets: number[][],
  cur: number
) {
  if (cur === nums.length) {
    subsets.push([...curSubset]);
    return;
  }

  curSubset.push(nums[cur]);
  helper(nums, curSubset, subsets, cur + 1);
  curSubset.pop();
  let i = cur + 1;
  while (i < nums.length && nums[cur] === nums[i]) {
    i++;
  }
  helper(nums, curSubset, subsets, i);
}

// Method 2 : TC :  O(n!)
// Space C : O(n)
// exclude if the previous element is the same as current element and if it is within the same recursive call

function subsetsWithDup2(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const subsets: number[][] = [];
  helper2(nums, [], subsets, 0);
  return subsets;
}

function helper2(
  nums: number[],
  curSubset: number[],
  subsets: number[][],
  cur: number
) {
  subsets.push([...curSubset]);

  for (let i = cur; i < nums.length; i++) {
    if (i > cur && nums[i] === nums[i - 1]) continue;
    curSubset.push(nums[i]);
    helper2(nums, curSubset, subsets, i + 1);
    curSubset.pop();
  }
}

export {};
