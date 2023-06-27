// give an array of numbers and targetSum , find two number that sum up to the target

// Pseudo Code
// Initialize a hashMap to record the  number with its index
// if the remainder exist in the hashMap return [remainder index , current number index]
// else set the currentNumber index to the hashmap

// Time Complexity : O(n) where n is the size of the array
// Space Complexity : O(n) where n is the size of the array

const twoSum = (nums: Array<number>, targetSum: number): [number, number] => {
  const hashMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const remainder = targetSum - nums[i];
    if (remainder in hashMap) {
      return [hashMap[remainder], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
  return [-1, -1];
};
