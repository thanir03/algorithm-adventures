// remove all continuous character if the continuous character length is k

function removeDuplicates(str: string, k: number): string {
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] === str[i]) {
      stack[stack.length - 1] += str[i];
      if (stack[stack.length - 1].length === k) stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  let res = "";
  while (stack.length > 0) {
    res = stack.pop()! + res;
  }
  return res;
}

// Time complexity : O(n) because iterating through the string
// Space Complexity : O(n) because of the max size of the stack will be n

console.log(removeDuplicates("abcd", 2));
