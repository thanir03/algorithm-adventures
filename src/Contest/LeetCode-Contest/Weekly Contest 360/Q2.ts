// Question 2 of leetcode contest

function minimumPossibleSum(n: number, target: number): number {
  const set = new Set<number>();
  let count = 0;
  let curNum = 1;
  for (let i = 0; i < n; i++) {
    while (set.has(curNum)) {
      curNum++;
    }
    count += curNum;
    set.add(target - curNum);
    curNum++;
  }
  return count;
}

minimumPossibleSum(2, 3);
