// Car Fleet Problem
// Using a stack
// Review this

// PATTERN : MONOTONIC INCREASING

import { Stack } from "./stack.js";

// Sort the car in ascending order according to the position of the car fleet
// Find the time taken to arrive to the destination
// If a car has lower time than a car behind , it mean overtaking
// Therefore , the faster car need to lower its speed to the slower car
// Both of this car becomes a fleet

const carFleet = (
  target: number,
  position: number[],
  speed: number[]
): number => {
  let res = 0;
  const stack = new Stack<number>();
  //  map the position to speed
  const arr: [number, number][] = position.map((item, index) => [
    item,
    speed[index],
  ]);
  // sort the array according to the position
  arr.sort((prev, next) => prev[0] - next[0]);
  // loop through the arr
  for (let i = arr.length - 1; i >= 0; i--) {
    let [pos, speed] = arr[i];
    const time = (target - pos) / speed;
    let maxTime = time;
    //  the reason it is if statement instead of while loop is because
    // if currentTime < previous time in the stack : then this creates a fleet
    // but we know that the rest of the elements are no longer a fleet with the current element
    // therefore , we do not need to remove all the element with lower time than top Of the stack
    if (!stack.isEmpty() && time <= stack.peek()) {
      maxTime = Math.max(stack.pop()!, time);
    }
    stack.push(maxTime);
  }

  while (!stack.isEmpty()) {
    stack.pop();
    res++;
  }
  console.log(res);
  return res;
};

carFleet(12, [4, 0, 5, 3, 1, 2], [6, 10, 9, 6, 7, 2]);

// Time complexity is O(n log n)
// nlogn is because we sorted the array
// Space Complexity : O(n)
// Space is used for stack and creating a new array
