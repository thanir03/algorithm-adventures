function canMakeSubsequence(str1: string, str2: string): boolean {
  let j = 0;
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    let nextChar = String.fromCharCode(str1[i].charCodeAt(0) + 1);
    if (char === "z") {
      nextChar = "a";
    }
    if (char === str2[j] || nextChar === str2[j]) {
      j++;
    }
  }
  return j === str2.length;
}

console.log(canMakeSubsequence("zc", "ad"));
