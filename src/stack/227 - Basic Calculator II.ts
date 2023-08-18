// Basic Calculator without parentheses but involves multiplication or division
// Numbers are non negative

// Intuition :
// Iterate the string in one pass
// Handle Multiplication and Division only first
// Then handle the add/subtract from the start to the end of the stack

// If a number is encountered and the next sign of the previous number is
// multiply or divide , perform calculation

const calculate = (str: string) => {
  let prevNumber = 0;
  let sign = "+";
  const stack: [number, string][] = []; // [number , sign]
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0") {
      let num = 0;
      let j = i;
      while (j < str.length && str[j] >= "0") {
        num = num * 10 + parseFloat(str[j]);
        j++;
      }
      if (sign === "*") {
        prevNumber = prevNumber * num;
      } else if (sign === "/") {
        prevNumber = Math.floor(prevNumber / num);
      } else {
        prevNumber = num;
      }
      sign = "+";
      i = j - 1;
    } else if (str[i] === "+" || str[i] === "-") {
      sign = str[i];
      stack.push([prevNumber, sign]);
      sign = "+";
      prevNumber = 0;
    } else if (str[i] === "*" || str[i] === "/") {
      sign = str[i];
    }
  }
  stack.push([prevNumber, sign]);

  let ans = 0;
  let prevSign = "+";
  for (let i = 0; i < stack.length; i++) {
    const [num, sign] = stack[i];
    if (prevSign === "+") {
      ans += num;
    } else {
      ans -= num;
    }
    prevSign = sign;
  }
  return ans;
};

// More optimal and cleaner solution

// Intution
// Perform the multiplication and division first 

const calculate2 = (str: string) => {
  if (str == "") return 0;
  let sign = "+";
  // to store encountered numbers that could be added in the end
  let stack: number[] = [];
  for (let i = 0; i < str.length; i++) {
    let currentNum = 0;
    if (str[i] >= "0" && str[i] <= "9") {
      while (str[i] >= "0" && str[i] <= "9") {
        currentNum = currentNum * 10 + parseFloat(str[i++]);
      }
      i--;
      if (sign === "+") {
        stack.push(currentNum);
      } else if (sign === "-") {
        stack.push(-currentNum);
      } else if (sign === "*") {
        stack.push(stack.pop()! * currentNum);
      } else {
        let quotient = stack.pop()! / currentNum;
        quotient = quotient >= 0 ? Math.floor(quotient) : Math.ceil(quotient);
        stack.push(quotient);
      }
      sign = "+";
    } else if (str[i] !== " ") {
      sign = str[i];
    }
  }
  return stack.reduce((sum, num) => sum + num);
};
console.log(calculate2("3-5 / 2 "));
