// My solution using stack to store the values that are not gonna be collided
// remove the element in the stack when the asteroid is negative and the stack value is positive

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        Math.abs(asteroids[i]) > stack[stack.length - 1]
      ) {
        stack.pop();
      }
      if (stack[stack.length - 1] == Math.abs(asteroids[i])) {
        stack.pop();
        continue;
      }
      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroids[i]);
      }
    }
  }
  return stack;
}

// Idea: Finding the difference between both asteroids to determine whether we should add the current asteroid or remove the previous asteroids
// Trick :
// 1. Finding difference of the asteroids
// 2. Emptying the asteroid by usign asteroid[i] - 0
// - Removing this asteroid so that this cannot be added to the stack

const asteroidCollision2 = (asteroids: number[]) => {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
      continue;
    }
    while (stack.length > 0 && stack[stack.length - 1] > 0) {
      const collisionValue = asteroids[i] + stack[stack.length - 1];
      if (collisionValue === 0) {
        // both the asteroids are the same size
        stack.pop();
        asteroids[i] = 0; // removing the asteroid element by setting it to 0
        break;
      } else if (collisionValue > 0) {
        // both the asteroid on the stack is bigger
        asteroids[i] = 0; // removing the asteroid element by setting it to 0
        break;
      } else {
        // current asteroid is bigger
        stack.pop();
      }
    }
    if (asteroids[i] != 0) stack.push(asteroids[i]);
  }
  return stack;
};

asteroidCollision2([10, 2, -5]);

//
