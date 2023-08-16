function romanToInt(s: string): number {
  const hashMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  let i = 0;
  while (i < s.length) {
    if (hashMap[s[i]] < hashMap[s[i + 1]]) {
      res += hashMap[s[i + 1]] - hashMap[s[i]];
      i += 2;
      continue;
    }
    res += hashMap[s[i]];
    i++;
  }
  return res;
}

console.log(romanToInt("MCMXCIV"));
