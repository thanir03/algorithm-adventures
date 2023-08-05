// given an array of numbers from 1 to n
// return the first duplicate value with minimum index

// Naive solution
// Use a hashset to record unique array values
// loop through the array
//  if num is in hashset : return num
//  else set num in hashset
// return -1

const firstDuplicateValue = (array: Array<number>): number => {
  const set = new Set();
  for (let num of array) {
    if (set.has(num)) return num;
    else {
      set.add(num);
    }
  }
  return -1;
};

// Time Complexity : O(n) where n is the size of the array
// Space Complexity : O(n) where n is the size of the array

// More efficient solution (set the visited value as negative num)
// loop through the array
// if the num is visited (meaning set as negative)
// if the value at position num -1 negative , return num
// else convert value at position num -1 to negative

const firstDuplicateValue2 = (array: Array<number>): number => {
  for (let num of array) {
    let absNum = Math.abs(num);
    if (array[absNum - 1] < 0) return absNum;
    else {
      array[absNum - 1] *= -1;
    }
  }
  return -1;
};

// Time Complexity : O(n) where n is the size of the array
// Space Complexity : O(1) where n is the size of the array
