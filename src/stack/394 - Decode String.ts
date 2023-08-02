// Decode String
// Stack question
// Why are we using stack ?
// To track the previously stored string that is manipulated
// Correct solution but is there a much cleaner solution than this

const decodeStr = (str: string): string => {
  const stack: (number | string)[] = [];
  let isNewNum = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "]") {
      let poppedStr = "";
      while (
        stack[stack.length - 1] &&
        typeof stack[stack.length - 1] !== "number"
      ) {
        poppedStr += stack.pop();
      }
      const num = +stack.pop()!;
      const res = poppedStr.repeat(num);
      stack.push(res);
      isNewNum = true;
    } else {
      if (str[i] == "[") {
        isNewNum = true;
        continue;
      }
      if (!isNaN(parseFloat(str[i]))) {
        let num = str[i];
        if (
          stack.length > 0 &&
          typeof stack[stack.length - 1] === "number" &&
          !isNewNum
        ) {
          const poppedNum = stack.pop()!;
          num = String(poppedNum) + num;
        } else {
          isNewNum = false;
        }
        stack.push(+num);
      } else {
        stack.push(str[i]);
      }
    }
  }
  for (let i = 0; i < stack.length; i++) {
    const element = stack[i];
    if (typeof element === "string") {
      stack[i] = reverseString(element);
    }
  }
  return stack.join("");
};

const reverseString = (str: string) => {
  let reversedStr: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

// Idea behind this solution

// set the isNewNumber to true
//  Iterate through the string
// if the current element is "]": (closing bracket)
//  pop the stack and add it to the a new str until the topOfTheStack is a number
// pop the stack to get the number of occurance
// multiply the string by the numberofoccurance
// isNewNumber = true

// if the current element is "[" : isNewNumber = true then stop the execution
// if the currentElement is a number && isNewNum && previousElementIsANumber : add the number to the stack
// if the currentElement is a number && isNewNum is false : remove the number from the stack and combine the all the digits to the stacks

// after iterating the string , reverse every element in the stack
// then join the stack and return the res

const decodeString = (str: string) => {
  const stack: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "]") {
      let encodedString = "";
      while (stack[stack.length - 1] != "[") {
        encodedString = stack.pop()! + encodedString;
      }
      stack.pop(); // to remove the [ from the stack
      let k = "";
      while (stack.length > 0 && isStringNumber(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }
      stack.push(encodedString.repeat(+k));
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join("");
};

const isStringNumber = (str: string): boolean => {
  return !isNaN(parseFloat(str));
};

console.log(decodeString("3[a2[c]]"));

// Time Complexity : O(n) - iterating through the entire str
// Space Complexity : O(n) - using a stack

// Idea of the algorithm
// Trick used
// 1. push all the elements other than ]
// 2. remove the topOfTheStack until the topOfTheStack is digit
// 3. instead of reversing the output string in the end , we could just add the prev value to the end like this
// str = value + str // reversing the str
// 4.pushing the [ to the stack to identify the encoded string
//  3[abc] abc is the encoded string
//

// if it is the end of the encoded string (can be identified using the ])
// remove all the encoded string
// remove the parentheses
// remove all the digits - k value
// multiply the string using string.repeat(k)
