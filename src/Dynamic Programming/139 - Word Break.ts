const wordBreak = (
  str: string,
  wordDict: string[],
  curStr: string = "",
  curIdx = 0
): boolean => {
  if (curStr.length > str.length) return false;
  if (curStr.length === str.length) {
    return curStr === str;
  }

  let result = false;
  for (let i = 0; i < wordDict.length; i++) {
    if (str.slice(curIdx, curIdx + wordDict[i].length) === wordDict[i]) {
      curStr += wordDict[i];
      result ||= wordBreak(str, wordDict, curStr, curIdx + wordDict[i].length);
      curStr = curStr.slice(0, curStr.length - wordDict[i].length);
    }
  }
  return result;
};

// Approaches
// 1. Generate every possible string
// 2. Match the string to the dictionary

const wordBreak2 = (
  str: string,
  wordDict: string[],
  idx: number = 0
): boolean => {
  if (idx === str.length) {
    return true;
  }

  let result = false;
  for (let i = 0; i < wordDict.length; i++) {
    if (str.slice(idx, idx + wordDict[i].length) === wordDict[i]) {
      result ||= wordBreak2(str, wordDict, idx + wordDict[i].length);
    }
  }
  return result;
};

const wordBreakDp = (str: string, wordDict: string[]): boolean => {
  const dp: boolean[] = new Array(str.length + 1).fill(false);
  dp[dp.length - 1] = true;
  for (let i = str.length - 1; i >= 0; i--) {
    for (let word of wordDict) {
      if (str.slice(i, i + word.length) === word) {
        dp[i] ||= dp[i + word.length];
      }
      if (dp[i]) break;
    }
  }
  return dp[0];
};

console.log(wordBreakDp("leetcode", ["leet", "code"]));
