// Find the score of the parentheses
// Rules
// () => 1
// AB => A+B
// (A) => 2 * A

// AB are balanced valid parentheses

const scoreOfParentheses = (str: string) => {
  const stack: (number | string)[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      let score = 0;
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
        score++;
      } else {
        while (stack.length > 0 && stack[stack.length - 1] != "(") {
          score += +stack.pop()!;
        }
        stack.pop();
        score *= 2;
      }
      stack.push(score);
    }
  }
  let totalScore = 0;
  for (let i = 0; i < stack.length; i++) {
    totalScore += +stack[i];
  }
  console.log(totalScore);
  return totalScore;
};

scoreOfParentheses("(()(()))");
