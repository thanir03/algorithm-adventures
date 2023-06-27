// Input : Array<[number,number]>
// Output: Array<[number,number]>

// Merge intervals that overlaps with other interval
// Note that the intervals are not sorted

// IF the intervals are sorted

// iterate through the interal
//  if the array[i][0] >= array[i-1][1]
//      merge into [array[i-1][0],array[i][1]]

// Time Complexity : O(n log n) where n is size of array
// Space Complexity : O(1)

function mergeOverlappingIntervals(
  nums: Array<[number, number]>
): Array<[number, number]> {
  nums.sort((a, b) => a[0] - b[0]);
  const intervals: Array<[number, number]> = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i][0] <= intervals[intervals.length - 1][1]) {
      const prev = intervals.pop()!;
      const newInterval: [number, number] = [
        prev[0],
        Math.max(prev[1], nums[i][1]),
      ];
      intervals.push(newInterval);
    } else {
      intervals.push(nums[i]);
    }
  }
  return intervals;
}
