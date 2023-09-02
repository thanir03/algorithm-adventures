function combine(n: number, k: number): number[][] {
  const comb: number[][] = [];
  findAllCombinations(n, k, 1, comb, []);
  return comb;
}

function findAllCombinations(
  end: number,
  k: number,
  currentNum: number,
  comb: number[][],
  curComb: number[]
): void {
  if (currentNum > end || k === 0) {
    if (k > 0) {
      return;
    }
    comb.push(curComb.slice());
    return;
  }

  for (let i = currentNum; i <= end; i++) {
    curComb.push(i);
    findAllCombinations(end, k - 1, i + 1, comb, curComb);
    curComb.pop();
  }
}

console.log(combine(4, 2));
