// Class Photos
// given two array ,
// arr1 , arr2 -> find the highest array
// ensure the highest array has all element in same index higher than lower array

// Ex: a1 : [5, 8 , 1 , 3 ,4]
// Ex: a2 : [6, 9 , 2 , 4 ,5]
// highest array in this case is a2
// ensure in every index , the highest array is higher than lower array

// highest array : [2,4,5,6,9]
// lowest array :  [1,3,4,5,8]
// the difference between both array need to be as low as possible

// Conceptual Algorithm
// Sort both arrays
// find the highest array by comparing the last element in both array
// compare both array
// if value in higher array is lower or equal to lower array : return false
// return true

const isClassPhotosValid = (class1: number[], class2: number[]) => {
  class1.sort((a, b) => a - b);
  class2.sort((a, b) => a - b);
  let highestArr: number[] = [];
  let lowestArr: number[] = [];
  if (class1[class1.length - 1] === class2[class2.length - 1]) return false;
  if (class1[class1.length - 1] > class2[class2.length - 1]) {
    highestArr = class1;
    lowestArr = class2;
  } else {
    highestArr = class2;
    lowestArr = class1;
  }

  for (let i = 0; i < highestArr.length; i++) {
    if (highestArr[i] <= lowestArr[i]) return false;
  }
  return true;
};
