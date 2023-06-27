// return boolean whether the number in the array is duplicated

// Pseudo code
// Initialize a set
// Iterate the array
//  If the number exist in the set , return true
//  else set the number in the set
//  return false

const containsDuplicate = (nums: Array<number>): boolean => {
  const set = new Set<number>();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};

// Time complexity : O(n) where n is the size of the array
// Space complexity : O(n) where n is the size of the arrays
