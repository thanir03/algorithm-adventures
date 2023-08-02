const generateParenthesis = (n: number): string[] => {
  const arr: string[] = [];
  parenthesisGenerator(arr, n, n);
  return arr;
};

const parenthesisGenerator = (
  arr: string[],
  openingCount: number,
  closingCount: number,
  curPar: string = ""
): void => {
  if (openingCount === 0 && closingCount === 0) {
    arr.push(curPar);
    return;
  }

  if (openingCount > 0) {
    parenthesisGenerator(arr, openingCount - 1, closingCount, curPar + "(");
  }

  if (closingCount > 0 && closingCount > openingCount) {
    parenthesisGenerator(arr, openingCount, closingCount - 1, curPar + ")");
  }
};

console.log(generateParenthesis(4));
