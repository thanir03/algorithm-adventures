// Remove k digits from number to find the lowest possible number

//  this solution works but it exceeds the time limit

const removeKDigits = (num: string, k: number) => {
  let outputStr = "";
  let outputLength = num.length - k;

  for (let i = 0; i < outputLength; i++) {
    let lowest = 0;
    for (let j = 1; j <= k; j++) {
      if (Number(num[j]) < Number(num[lowest])) {
        lowest = j;
      }
    }
    outputStr += num[lowest];
    num = num.slice(lowest + 1);
    k = k - lowest;
  }
  return removeTrailingZeros(outputStr) ?? "0";
};

const removeTrailingZeros = (str: string): string => {
  let i = 0;
  while (str[i] === "0") {
    i++;
  }
  return str.slice(i);
};

// Time Complexity : O(n * (n - k)) = O(n^2) where n is the length of the string
// Space Complexity : O(n)

const removeKDigit2 = (num: string, k: number) => {
  const stack: string[] = [];
  for (let i = 0; i < num.length; i++) {
    const currentNum = num[i];
    while (Number(currentNum) < Number(stack[stack.length - 1]) && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(currentNum);
  }
  let res = stack.slice(0, stack.length - k).join("");
  return removeTrailingZeros(res) || "0";
};

console.log(removeKDigit2("1432219", 1));
