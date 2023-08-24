const getPrimeScore = (nums: Array<number>) => {
  let primeScoreCount = [];
  for (let i = 0; i < nums.length; i++) {
    primeScoreCount.push(getFactors(nums[i]));
  }
  return primeScoreCount;
};

const getFactors = (num: number) => {
  let count = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && isPrimeNumber(i)) {
      count++;
    }
  }
  return count;
};

const isPrimeNumber = (num: number) => {
  if (num === 2) return true;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const maximumScore = (nums: number[], k: number) => {
  let score = 1;
  // const primeScoreCount = getPrimeScore(nums);
  while (k > 0) {
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[max]) {
        max = i;
      }
    }
    score *= nums[max];
    nums = nums.filter((item, index) => index != max);
    k--;
  }
  return score;
};

console.log(maximumScore([8, 3, 9, 3, 8], 2));
