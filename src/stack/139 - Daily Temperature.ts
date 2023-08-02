const dailyTemparatures = (tem: number[]): number[] => {
  const stack: [number, number][] = [];
  const res: number[] = [];
  for (let i = tem.length - 1; i >= 0; i--) {
    while (stack.length > 0 && tem[i] >= stack[stack.length - 1][0]) {
      stack.pop();
    }
    if (stack.length > 0 && tem[i] < stack[stack.length - 1][0]) {
      res[i] = stack[stack.length - 1][1] - i;
    } else {
      res[i] = 0;
    }
    stack.push([tem[i], i]);
  }
  return res;
};

// Monotonic decreasing stack

console.log(dailyTemparatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));
