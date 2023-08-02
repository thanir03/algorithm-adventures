// Given pushed and popped element from a stack , return whether the sequence of push and pop is correct

// Example : [1,2,3,4,5] => [5,3,4,2,1] false
// Example : [1,2,3,4,5] => [5,4,3,2,1] true
// Example : [1,2,3] => [2,3,1] true
// this is because the elements 1 and 2 are pushed into the stack first [1,2]
// then value 2 is popped [1]
// then value 3 is pushed into the stack [1,3]
// then value 3 is popped
// then value 1 is popped
// therefore the push order is 1 , 2, 3 and the pop order is 2,3,1

const validateStackSequences = (
  pushed: number[],
  popped: number[]
): boolean => {
  const stack: number[] = [];
  const set = new Set<number>();
  let pointer = 0;
  for (let i = 0; i < popped.length; i++) {
    const poppedElement = popped[i];
    if (set.has(poppedElement)) {
      const lastElement = stack.pop()!;
      set.delete(lastElement);
      if (lastElement !== poppedElement) return false;
    } else {
      while (pointer < pushed.length && pushed[pointer] != poppedElement) {
        stack.push(pushed[pointer]);
        set.add(pushed[pointer]);
        pointer++;
      }
      stack.push(pushed[pointer]);
      set.add(pushed[pointer]);
      pointer++;

      const lastElement = stack.pop()!;
      set.delete(lastElement);
      if (lastElement !== poppedElement) return false;
    }
  }
  return true;
};

// TIME COMPLEXITY : O(N) because iterating through the popped array
// SPACE COMPLEXITY : O(1) because  store the elements in a stack and a set (uneccesary)

// Approach 2

const validateStackSequences2 = (pushed: number[], popped: number[]) => {
  const stack: number[] = [];
  let pointer = 0;
  for (let i = 0; i < pushed.length; i++) {
    const curElem = pushed[i];
    stack.push(curElem);

    while (
      pointer < popped.length &&
      stack.length > 0 &&
      popped[pointer] === stack[stack.length - 1]
    ) {
      stack.pop();
      pointer++;
    }
  }
  return stack.length === 0;
};

console.log(validateStackSequences2([1, 2, 3, 4, 5], [4, 5, 2, 3, 1]));
