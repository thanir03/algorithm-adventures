/**
 * Permutation Sequence
 * @param {number} n
 * @param {number} k
 * @returns {string}
 */
const permutationSequence = function (n, k) {
  --k;
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let start = 0;
  let end = factorial(n) - 1;
  let res = "";

  for (let i = 0; i < n; i++) {
    let rangeCount = (end - start + 1) / arr.length;
    for (let j = 0; j < arr.length; j++) {
      let rangeStart = start + rangeCount * j;
      let rangeEnd = rangeStart + rangeCount - 1;
      if (k >= rangeStart && k <= rangeEnd) {
        res += arr[j];
        arr.splice(j, 1);
        start = rangeStart;
        end = rangeEnd;
        break;
      }
    }
  }
  return res;
};

// Time Complexity : O(n ^ 3)
// Space Complexity : O(n)

const factorial = (num) => {
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  return ans;
};

const permutationSequence2 = (n, k) => {
  k--;
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let res = "";
  let total = factorial(arr.length);

  for (let i = 0; i < n; i++) {
    const range = total / arr.length;
    const index = Math.floor(k / range);
    res += arr[index];

    k = k % range; // to determine the k value in the next range
    arr.splice(index, 1);
    total /= n - i;
  }
  return res;
};

console.log(permutationSequence2(4, 9));

// Example :
// n = 4
// total = 24 , k = 6
// range = 24 / 4 = 6
// 6 / 6 = 1 ( the 2 range)
// 6%6 = 0 (0 is the first value in the next range )

