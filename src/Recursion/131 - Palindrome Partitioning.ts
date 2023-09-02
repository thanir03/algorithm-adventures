const partition = (s: string) => {
  const partitions: string[][] = [];
  helper(s, partitions, [], 0);
  return partitions;
};

const helper = (
  str: string,
  partitions: string[][],
  curPar: string[],
  idx: number
) => {
  if (idx === str.length) {
    partitions.push(curPar.slice());
    return;
  }

  for (let i = idx; i < str.length; i++) {
    const curStr = str.slice(idx, i + 1);
    if (isPalindrome(curStr)) {
      curPar.push(curStr);
      helper(str, partitions, curPar, i + 1);
      curPar.pop();
    }
  }
};

const isPalindrome = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
};
export {};

// console.log(partition("a"));

function partition2(str: string) {
  const partitions: string[][] = [];
  const curPar: string[] = [];
  helper2(str, curPar, partitions, 0);
  return partitions;
}

function helper2(
  str: string,
  curPar: string[],
  partitions: string[][],
  cur: number
) {
  if (cur === str.length) {
    partitions.push(curPar.slice());
    return;
  }

  for (let i = cur; i < str.length; i++) {
    const isStrPalindrome = isPalindrome(str.slice(cur, i + 1));
    if (isStrPalindrome) {
      curPar.push(str.slice(cur, i + 1));
      helper2(str, curPar, partitions, i + 1);
      curPar.pop();
    }
  }
}

console.log(partition2("aab"));
