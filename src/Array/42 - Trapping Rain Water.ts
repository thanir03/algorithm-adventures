// Trapping water

// Trick :
// instead of tracking the next greater element and previous greater element
// we should track the max greater elements in the left and max greater elements in the right

// Find each elements max greater elements on the left and on the right
// Then to find area of water trapped , need to find the lowest of the maxLeft and maxRight and deduct it by height of the element
// sum all the area and return the value

const trap = (nums: number[]): number => {
  let area = 0;
  let maxLeft = 0;
  const maxLArr = [0];
  for (let i = 1; i < nums.length; i++) {
    maxLArr[i] = maxLeft;
    if (nums[i] > nums[maxLeft]) {
      maxLeft = i;
    }
  }
  let maxRight = nums.length - 1;
  const maxRArr = new Array(nums.length);
  maxRArr[maxRArr.length - 1] = maxRight;
  for (let i = nums.length - 2; i >= 0; i--) {
    maxRArr[i] = maxRight;
    if (nums[i] > nums[maxRight]) {
      maxRight = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const leftBound = maxLArr[i];
    const rightBound = maxRArr[i];
    let curArea = Math.min(nums[rightBound], nums[leftBound]) - nums[i];
    if (curArea > 0) area += curArea;
  }
  console.log(area);
  return area;
};

// Solution 2 : Two Pointers
// Redo this problem after exam

const trap2 = (arr: number[]): number => {
  return NaN;
};

trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
