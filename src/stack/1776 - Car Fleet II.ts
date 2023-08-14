// Car Fleet 2 Problem

// O(n^2) solution

const getCollisionTimes = (cars: number[][]): number[] => {
  const times = new Array(cars.length).fill(-1);
  for (let i = cars.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < cars.length; j++) {
      const [c1, m1] = cars[i];
      const [c2, m2] = cars[j];
      if (m1 > m2) {
        const time = (c2 - c1) / (m1 - m2);
        if (time < times[i] && times[i] !== -1) {
          times[i] = time;
        } else if (times[i] === -1) {
          times[i] = time;
        }
      }
    }
  }
  return times;
};

const getCollisionTimes2 = (cars: number[][]) => {
  const stack: number[] = []; // indices of the cars
  const times = new Array(cars.length).fill(-1);
  for (let i = cars.length - 1; i >= 0; i--) {
    // removing all elements in stack that is not possible for collision
    while (stack.length > 0) {
      if (cars[i][1] <= cars[stack[stack.length - 1]][1]) {
        stack.pop();
      } else {
        const [p1, s1] = cars[i];
        const [p2, s2] = cars[stack[stack.length - 1]];
        const collisionTime = (p1 - p2) / (s2 - s1);
        if (
          collisionTime > times[stack[stack.length - 1]] &&
          times[stack[stack.length - 1]] != -1
        ) {
          stack.pop();
        } else break;
      }
    }

    if (stack.length > 0) {
      const index = stack[stack.length - 1];
      const [p1, s1] = cars[i];
      const [p2, s2] = cars[index];
      const collisionTime = (p1 - p2) / (s2 - s1);
      times[i] = collisionTime;
    }

    stack.push(i);
  }
  return times;
};

console.log(
  getCollisionTimes2([
    [1, 3],
    [4, 1],
    [7, 3],
    [10, 5],
    [11, 2],
    [13, 5],
    [17, 4],
    [20, 1],
  ])
);
