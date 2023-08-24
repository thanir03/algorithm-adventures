// Given a 2d array / matrix, find the largest rectangle in the matrix
// All values of matrix is either 1 or 0

// 0 1 0 1
// 1 1 1 1
// 1 1 1 1
// 1 0 0 1

// Problems
// 1. Convert each row of the matrix into a separate histogram by considering previous histograms
// 2. Get the largest rectangle in a histogram using monotonic increasing algo
// return the maximum rectangle in a histogram

// TC : O(NM)
// SC : O(NM)
const maximalRectangle = (nums: string[][]) => {
  // Convert each Row into a histogram
  const histograms: number[][] = [];
  for (let row = 0; row <= nums.length - 1; row++) {
    const histogram: number[] = [];
    for (let col = 0; col < nums[row].length; col++) {
      if (nums[row][col] === "1") {
        histogram.push(1 + (histograms?.[histograms.length - 1]?.[col] ?? 1));
      } else {
        histogram.push(0);
      }
    }
    histograms.push(histogram);
  }
  let maximumArea = -Infinity;
  for (let i = 0; i < histograms.length; i++) {
    maximumArea = Math.max(maximumHistogram(histograms[i]), maximumArea);
  }
  return maximumArea;
};

// TC : O(n)
// SC : O(m)
const maximumHistogram = (nums: number[]) => {
  const stack: [number, number][] = []; // [element , index]
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let lowestIndex = i;
    while (stack.length > 0 && nums[i] <= stack[stack.length - 1][0]) {
      const [element, index] = stack.pop()!;
      max = Math.max(element * (i - index), max);
      lowestIndex = Math.min(lowestIndex, index);
    }

    stack.push([nums[i], lowestIndex]);
  }

  while (stack.length > 0) {
    const [element, index] = stack.pop()!;
    max = Math.max(element * (nums.length - index), max);
  }

  return max;
};

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalRectangle(matrix));

export {};
