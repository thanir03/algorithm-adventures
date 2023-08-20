const minimumSum = (n: number, k: number) => {
  let sum = 0;
  let set = new Set<number>();
  let curNum = 1;
  while (n > 0) {
    if (!set.has(curNum)) {
      sum += curNum;
      set.add(k - curNum);
      n--;
    }
    curNum++;
  }
  return sum;
};

console.log(minimumSum(2, 6));
