// given two strings , find the second string is an anagram of another string

// Solution 1
// Pseudo code
// Sort both the strings alphabetically
// if both the string are the same return true
// Time Complexity : O(n log n) n is  size of both strings
// Space Complexity : O(n)  n is the  size of the string

const isAnagram = (s1: string, s2: string) => {
  s1 = s1.split("").sort().join();
  s2 = s2.split("").sort().join();
  return s1 === s2;
};

// Solution 2
// Initialize a hashMap to record the occurance of the character in the string
// record the character into the hashmap
// deduct the character occured in s2 in the hashmap
// check if every character in the hashMap is 0

// Time Complexity : O(n) where n is  size of both string
// Space Complexity : O(n) where n is size of string s1

const isAnagram2 = (s1: string, s2: string) => {
  if (s1.length !== s2.length) return false;
  const hashMap: { [key: string]: number } = {};
  for (let char of s1) {
    if (char in hashMap) {
      hashMap[char] = hashMap[char] + 1;
    } else {
      hashMap[char] = 1;
    }
  }

  for (let char of s2) {
    if (char in hashMap) {
      hashMap[char] = hashMap[char] - 1;
      if (hashMap[char] === 0) delete hashMap[char];
    } else {
      return false;
    }
  }
  for (let char in hashMap) {
    if (hashMap[char] !== 0) return false;
  }
  return true;
};

// Solution 3

// Initialize two hashMaps to record the occurance of char of both string
// Check if the occurance of string in both character is the same

// Time complexity : O(n)
// Space Complexity  complexity : O(n)

const isAnagram3 = (s1: string, s2: string) => {
  if (s1.length !== s2.length) return false;
  const hashMap1: { [key: string]: number } = {};
  const hashMap2: { [key: string]: number } = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in hashMap1) {
      hashMap1[s1[i]]++;
    } else {
      hashMap1[s1[i]] = 1;
    }

    if (s2[i] in hashMap2) {
      hashMap2[s2[i]]++;
    } else {
      hashMap2[s2[i]] = 1;
    }
  }

  for (let char in hashMap1) {
    if (!(char in hashMap2)) return false;
    if (hashMap1[char] != hashMap2[char]) return false;
  }
  return true;
};
