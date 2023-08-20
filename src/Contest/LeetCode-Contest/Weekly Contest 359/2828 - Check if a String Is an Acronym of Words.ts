function isAcronym(words: string[], s: string): boolean {
  let outputStr = "";
  for (let i = 0; i < words.length; i++) {
    outputStr += words[i][0];
  }
  return outputStr === s;
}

console.log(isAcronym(["alice", "cob", "charlie"], "abc"));
