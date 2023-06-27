// Minimum Waiting Time

// Given an array of numbers , find the minimum waiting time for all the elements to execute

// Ex : [9, 8 ,7 ,6]
// WT :  0  9  17 24 = 50

// Conceptual Algorithm
//  1. Sort the array ascendingly to place the lower numbered task in first to reduce the accumulation of time
// 2. Find the waiting Time

// Because execution of 1 task will need to be waited by the rest of the task , if the first take is lower numbered then the total waiting would be lowered

const mimimumWaitingTime = (arr: number[]): number => {
  arr.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  let waitingTime = 0;
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    waitingTime += prev;
    totalWaitingTime += waitingTime;
    prev = arr[i];
  }
  return totalWaitingTime;
};
// Time Complexity : O(n log n)
// Space Complexity : O(1)
