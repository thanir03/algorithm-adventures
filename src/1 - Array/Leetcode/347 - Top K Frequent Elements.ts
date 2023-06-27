// Top K Frequent Elements

// Get the K most frequent elements in the array
// ex : [1,3,4,3,4,4] k=2 (1st most frequent and 2nd most frequent)
// 1st = 4
// 2nd = 3
// Output : [3,4] order does not matter

// Pseudo code
// Approach 1 : Using a hashmap
// To calculate the frequency of each elements
// initialize the hashmap
// iterate through the num arrays
// if the number exist in hashmap : increment the value
// else set the value in hashmap to 1

// Convert the hashmap into entries (array of array) format
// sort the key-value pair
// loop backward and add the key into the array until k is zero

// Time Complexity : O(n log n)
// Space Complexity : O(n)

function topKFrequentElements(nums: Array<number>, k: number): number[] {
  // To calculate the frequency of number in the array
  const hashMap = new Map<number, number>();
  for (let num of nums) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num)! + 1);
    } else {
      hashMap.set(num, 1);
    }
  }
  const entries = Array.from(hashMap);
  entries.sort((a, b) => a[1] - b[1]);
  const res: Array<number> = [];
  for (let i = entries.length - 1; i >= 0; i--) {
    res.push(entries[i][0]);
    k--;
    if (k === 0) break;
  }
  return res;
}

// Approach 2 : Instead of sorting the frequency array , store the frequency array in another array according to the frequency

function topKFrequentElements2(nums: Array<number>, k: number): number[] {
  // To calculate the frequency of number in the array
  const hashMap = new Map<number, number>();
  for (let num of nums) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num)! + 1);
    } else {
      hashMap.set(num, 1);
    }
  }
  const frequency: number[][] = [];
  const entries = Array.from(hashMap);
  for (let [key, value] of entries) {
    if (frequency[value - 1]) {
      frequency[value - 1].push(key);
    } else {
      frequency[value - 1] = [key];
    }
  }
  const res: number[] = [];
  for (let i = frequency.length - 1; i >= 0; i++) {
    if (frequency[i]) {
      res.push(...frequency[i]);
      if (k === res.length) return res;
    }
  }
  return [];
}
