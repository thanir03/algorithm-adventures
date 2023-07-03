// Given a string , convert the string into good string
// good string do not contain characters that are upper case and lower case of the same letter

// Test Case :
// Input : leeEetcode => leetcode
// Input : abBACc = > ""
// after removing bB => aACc (removing Cc) => aA => remove aA

// Thought Process
// store isStringChanged = false

// Iterate through the string
//  if the current char is the same as the next char and one of those char is uppercase and another one is lowercase :
//    remove the character
// if the string is changed : recursively call the function with modified string
// if the string is not changed : return the string

const makeGood = (str: string): string => {
  let isStringSwapped = true;
  while (isStringSwapped) {
    isStringSwapped = false;
    for (let i = 0; i < str.length - 1; i++) {
      if (
        str[i].toLowerCase() === str[i + 1].toLowerCase() &&
        str[i].charCodeAt(0) != str[i + 1].charCodeAt(0)
      ) {
        str = str.slice(0, i) + str.slice(i + 2);
        isStringSwapped = true;
        i--;
      }
    }
  }
  return str;
};

const makeGood2 = (str: string): string => {
  const stack: Array<string> = [];
  for (let i = 0; i < str.length; i++) {
    const lastElement = stack[stack.length - 1];
    if (
      lastElement &&
      lastElement.toLowerCase() === str[i].toLowerCase() &&
      str[i] !== lastElement
    ) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
};

console.log(makeGood2("abBAcC"));
