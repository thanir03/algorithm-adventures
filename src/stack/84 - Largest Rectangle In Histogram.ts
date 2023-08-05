// Largest Rectangle In Histogram
// Find the largest area of rectangle given the list of elements in an array

// Idea : Using a stack to track the count of width of each element

const largestRectangleArea = (arr: number[]): number => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let [left, right] = [i - 1, i + 1];
    while (left >= 0 && arr[left] >= arr[i]) {
      left--;
    }

    while (right < arr.length && arr[right] >= arr[i]) {
      right++;
    }

    const width = right - 1 - (left + 1) + 1;
    max = Math.max(width * arr[i], max);
  }
  return max;
};
// Time complexity : O(n^2) because we iterate through the elemnent in the left and iterate through the elements in the right

// Approach 2 : Find the next smaller element and previous smaller element
// Find the distance between both elements and multiply with height

const largestRectangleArea2 = (arr: number[]): number => {
  const stack: number[] = [];
  const res1: number[] = []; // index of next smaller elements
  const res2: number[] = []; // index of previous smaller elements

  // next smaller element
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      res1[i] = stack[stack.length - 1];
    } else {
      res1[i] = arr.length;
    }
    stack.push(i);
  }

  stack.length = 0;
  // previous smaller element
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      res2[i] = stack[stack.length - 1];
    } else {
      res2[i] = -1;
    }
    stack.push(i);
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let curLen = res1[i] - 1 - (res2[i] + 1) + 1;
    let area = curLen * arr[i];
    max = Math.max(area, max);
  }

  return max;
};
// Time complexity : O(n) actually O(3n) -iterating through the array three times
// Space Complexity : O(n) actually O(3n) - stack and two additional array

// Approach 3 : Using a single array

const largestRectangleArea3 = (arr: number[]) => {
  const stack: [number, number][] = [];
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    while (stack.length > 0 && arr[i] < stack[stack.length - 1][0]) {
      const [height, index] = stack.pop()!;
      lowestIndex = Math.min(index);
      max = Math.max(height * (i - index), max);
    }

    stack.push([arr[i], lowestIndex]);
  }

  while (stack.length > 0) {
    const [height, index] = stack.pop()!;
    max = Math.max(height * (arr.length - index), max);
  }
  console.log(max);
  return max;
};

largestRectangleArea3([3, 6, 5, 7, 4, 8, 1, 0]);

// Trick used :
// 1. Monotonic ascending algorithms
// 2. Manipulating the index if the element is smaller than the topOfTheStack
