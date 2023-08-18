// Basic Calculator

// Given a string of arithmetic
// return the output
// Operations given is + or -

// Intution : Use a stack to store the previously encountred number
// Brute force solution
const calculate = (str: string): number => {
  const stack: (string | number)[] = [];
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (char === ")") {
      const num = stack.pop()!;
      stack.pop();
      pushElementIntoStack(stack, +num);
    } else if (char === "(" || char === "+" || char === "-") {
      stack.push(char);
    } else if (char === " ") {
      i++;
      continue;
    } else if (isFinite(+char)) {
      let j = i;
      while (j < str.length && isFinite(+str[j])) {
        j++;
      }
      pushElementIntoStack(stack, +str.slice(i, j));
      i = j - 1;
    }
    i++;
  }
  return +stack.pop()!;
};

const pushElementIntoStack = (stack: (string | number)[], num2: number) => {
  let res = num2;
  while (
    stack.length > 0 &&
    (stack[stack.length - 1] === "+" || stack[stack.length - 1] === "-")
  ) {
    let num1 = 0;
    let operation = String(stack.pop()!);
    if (operation === "-") {
      if (!isNaN(+stack[stack.length - 1])) {
        num1 = +stack.pop()!;
      }
      res = num1 - num2;
    } else if (operation === "+") {
      num1 = +stack.pop()!;
      res = num1 + num2;
    }
  }
  stack.push(res);
};

// console.log(calculate("-2+ 1"));
// Test Cases
// if str is "(" or "-" or "+" : add to the stack
// if str is a digit : expand till digits are completed
// before pushing into the stack, check whether the top of the stack is an operation
// if it is an operation
//  case 1 : -
//    there are two possibility either a number before - or no number before it
//    if there is a number before it , minus both numbers
//    if there are no numbers before it , negative number
//  case 2 : +
//    it is guaranteed the to add two values
// if str is ) pop two elements which is number and opening braces

// More optimized and cleaner solution

// Intuition behind using stack
// to handle nested expressions separately and restore the previous state
// we are able to reset the current running calculation

const calculate2 = (str: string) => {
  let result = 0;
  let operationSign = 1; // (+ = 1) | (- = -1)
  let i = 0;
  let stack: [number, number][] = [];
  while (i < str.length) {
    let char = str[i];
    if (char === "(") {
      // new parentheses is encountered
      // need to reset the state
      // the remaining sum is pushed to the array
      stack.push([result, operationSign]);
      result = 0;
      operationSign = 1;
    } else if (char === ")") {
      const [prevResult, operationSign] = stack.pop()!;
      result = prevResult + operationSign * result;
    } else if (char === "+") {
      operationSign = 1;
    } else if (char === "-") {
      operationSign = -1;
    } else if (char >= "0" && char <= "9") {
      // to check whether char is number
      let j = i;
      let num = 0;
      while (j < str.length && str[j] >= "0") {
        num = num * 10 + parseFloat(str[j]);
        j++;
      }
      result = result + operationSign * num;
      i = j - 1;
    }
    i++;
  }
  return result;
};

// Solution using recursion

const calculate3 = (str: string) => {
  return calculate2WithRecursion(str, 0)[0];
};

const calculate2WithRecursion = (
  str: string,
  i: number = 0
): [number, number] => {
  let result = 0;
  let operationSign = 1;
  if (str.length == 0) return [result, i];
  let index = i;
  while (index < str.length) {
    if (str[index] >= "0") {
      let j = index;
      let num = 0;
      while (j < str.length && str[j] >= "0") {
        num = num * 10 + parseFloat(str[j]);
        j++;
      }
      index = j - 1;
      result = result + num * operationSign;
    } else if (str[index] === "+") operationSign = 1;
    else if (str[index] === "-") operationSign = -1;
    else if (str[index] === "(") {
      let [newResult, newIndex] = calculate2WithRecursion(str, index + 1);
      result = result + newResult * operationSign;
      index = newIndex;
    } else if (str[index] === ")") return [result, index];
    index++;
  }
  return [result, index];
};

console.log(calculate3("(1+(4+5+2)-3)+(6+8)"));

export {};
