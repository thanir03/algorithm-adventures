// Time Complexity : O(n)
// Space Complexity : O(n) -> actual notation O(2n) due to using stack and countArray

// Using stack to validate parentheses
// if "(" : add the index to the stack
// if ")"  and there is "(" in the stack : change the index value to 1 in the count array

// Example ((())
// [0,1,1,1,1]
// the longest valid parentheses is 4

function longestValidParentheses(s: string): number {
  const stack: number[] = [];
  const countArray: (1 | 0)[] = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        let openingIndex = stack.pop()!;
        countArray[openingIndex] = 1;
        countArray[i] = 1;
      }
    }
  }
  let count = 0;
  let max = 0;
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] === 0) {
      max = Math.max(count, max);
      count = 0;
    } else {
      count++;
    }
  }
  max = Math.max(count, max);
  return max;
}

const longestValidParentheses2 = (str: string) => {
  // tracking the indices of the ( and starting point
  // storing the indices of opening and starting point of string
  const stack: number[] = [];
  // initial starting point of current String
  // similar to adding "(" to the start of the string
  stack.push(-1);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length > 0) {
        count = Math.max(count, i - stack[stack.length - 1]);
      } else {
        // additional ( case
        // Add this index as the starting point
        stack.push(i);
      }
    }
  }
  return count;
};

console.log(longestValidParentheses2("(()()(()"));
