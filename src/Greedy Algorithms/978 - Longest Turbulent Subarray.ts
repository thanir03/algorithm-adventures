// given an array of numbers , find the maximum length of turbulent subarray
// turbulent subarray is when
// arr[i] > arr[i+1] < arr[i+2] > arr[i+4]
// arr[i] < arr[i+1] > arr[i+2] < arr[i+4]
// the comparison operator flips between every element beside each other

// Whenever solving a problem , try the naive solution first

// Naive Solution : Two nested loop to identify the specific subarray for maximum length

const maxTurbulenceSize = (arr: number[]) => {
  if (arr.length === 0 || arr.length === 1) return arr.length;
  let maxTur = 1;
  for (let start = 0; start < arr.length; start++) {
    let isPrevHigh: boolean | null = null;
    for (let end = start; end < arr.length; end++) {
      if (
        arr[end + 1] === undefined ||
        (arr[end] > arr[end + 1] && isPrevHigh === true) ||
        (arr[end] < arr[end + 1] && isPrevHigh === false) ||
        arr[end] === arr[end + 1]
      ) {
        maxTur = Math.max(maxTur, end - start + 1);
        break;
      }
      isPrevHigh = arr[end] > arr[end + 1];
    }
  }
  return maxTur;
};
// Time complexity : O(n ^2) where n is the size of array
// Space Complexity : O(1)

// Sliding Window approach

// Pseudo code
// if len of arr = 0 or 1 :  then return the len of arr
// track maxTur , start , end
// loop through the array from 0 to end
//  if arr[i] > arr[i+1] && prev = > || arr[i] < arr[i+1] && prev = < || i+1 = arr.length || arr[i] == arr[i+1]
//    compute the length of subarray and find the maximum btwn maxTur and the length of subarray
//  set the prev to empty
//  if arr[i] === arr[i+1] :  start = end
// if arr[i] > arr[i+1] : prev = ">"
// else arr[i]  arr[i-1] : prev = "<"

const maxTurbulence = (arr: number[]): number => {
  if (arr.length === 0 || arr.length === 1) return arr.length;
  let maxTur = 0;
  let start = 0;
  let prev = "";
  for (let end = 0; end < arr.length; end++) {
    if (end === arr.length - 1) maxTur = Math.max(end - start + 1, maxTur);

    if (arr[end] > arr[end + 1]) {
      if (prev === ">") {
        maxTur = Math.max(end - start + 1, maxTur);
        start = end;
      }
      prev = ">";
    } else if (arr[end] < arr[end + 1]) {
      if (prev === "<") {
        maxTur = Math.max(end - start + 1, maxTur);
        start = end;
      }
      prev = "<";
    } else {
      maxTur = Math.max(end - start + 1, maxTur);
      start = end + 1;
      prev = "";
    }
  }

  return maxTur;
};

console.log(maxTurbulence([2, 2, 2]));

// start = 8
// end  = 1
// next = 9
// prev =
// max = 5
