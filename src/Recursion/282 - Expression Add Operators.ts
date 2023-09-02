// Given number and target
// find the sequence of operation between numbers to acheive target
// Operation allowed :  + , * ,-

const addOperators = (nums: string, target: number) => {
  const result: string[] = [];

  const backtrack = (
    idx: number,
    currentResult: string,
    prevNum: number,
    total: number
  ) => {
    if (idx === nums.length) {
      if (total === target) {
        result.push(currentResult);
      }
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      const str = nums.slice(idx, i + 1);
      if (str[0] === "0" && i > idx) return;
      if (idx === 0) {
        backtrack(i + 1, str, parseFloat(str), parseFloat(str));
      } else {
        backtrack(
          i + 1,
          currentResult + "+" + str,
          parseFloat(str),
          total + parseFloat(str)
        );
        backtrack(
          i + 1,
          currentResult + "-" + str,
          -parseFloat(str),
          total - parseFloat(str)
        );
        backtrack(
          i + 1,
          currentResult + "*" + str,
          prevNum * parseFloat(str),
          total - prevNum + prevNum * parseFloat(str)
        );
      }
    }
  };

  backtrack(0, "", 0, 0);
  return result;
};

console.log(addOperators("100", 1));

export {};

// Intuition
// Trying out every possible scenario
// Trick : not adding the operator on the first number
// But i tried to not add the operator on the last number

// 1+2+3
// 1+2*3
// 1+2-3

// 1-2+3
// 1-2-3
// 1-2*3

// 1*2+3
// 1*2-3
// 1*2*3

// Trick 2 : Multiplication
// we would want to carry the evaluated sum so far
// but due to multiplication rules
// we need to perform multiplication before subtraction and addition
// therefore , we would want to deduct the previous number and multiply it with current number and add it to the total
// total  - prevNum + (prevNum * curNum)
