// Valid Starting City  aka Gas Stations

// given array of distances between city and the city is ordered in a circle which means the last city is connected to the first city and array of fuel that can be refilled in each station and mileage of vehicle , return the index of city where the car is able to return to the starting city back

// Brute Force Approach
// Loop through the distance array starting from 0 to end
//  if(isValidStartingCity(i)) return i

// isValidStartingCity
//  fuelLeft = 0
//  Loop through the distance array starting from i to i
//    fuelLeft += fuel[i] * mpg
//    fuelLeft -= distance[i]
//    if fuelLeft < 0 : return false
//    if i === end : i = 0
//   Return false

const findValidStartingCity = (
  distance: number[],
  fuel: number[],
  mpg: number
) => {
  for (let i = 0; i < distance.length; i++) {
    let fuelLeft = 0;
    let j = i;
    fuelLeft += fuel[j] * mpg;
    fuelLeft -= distance[j];
    j++;
    if (j === distance.length) j = 0;
    if (fuelLeft < 0) continue;
    while (j !== i) {
      fuelLeft += fuel[j] * mpg;
      fuelLeft -= distance[j];
      j++;
      if (j === distance.length) j = 0;
      if (fuelLeft < 0) break;
    }
    if (j === i) return i;
  }
  return -1;
};

// Time Complexity : O(n^2) where n is the size of distance
// Space Complexity : O(1)

// Greedy Algorithm Approach
// find the difference between fuel and distance in each city
// if the city have negative gas deficit , there is no way this city would be the starting Point
// therefore, we discard the totalFuel and  update the starting Point to the next index

// totalFuel = 0
// startPoint = -1
// loop through the distance array
//  totalFuel += fuel[i] * mpg - distance[i]
//  if totalFuel < 0 : totalFuel = 0
// else
//  if startPoint === -1 : startPoint = i

const findValidStartingCity2 = (
  distance: number[],
  fuel: number[],
  mpg: number
) => {
  let totalFuel = 0;
  let startPoint = 0;
  for (let i = 0; i < distance.length; i++) {
    totalFuel += fuel[i] * mpg - distance[i];
    if (totalFuel < 0) {
      totalFuel = 0;
      startPoint = i + 1;
    }
  }
};

// Time Complexity : O(n)
// Space Complexity : O(1)

// Test
// startingPoint = 0
// fuel =     [10,20,10,0,30]
// distance = [5,25,15,10,15]
// gasDeficit=[5,0,-5,-10,15]

const testCase = {
  distance: [5, 25, 15, 10, 15],
  fuel: [1, 2, 1, 0, 3],
  mpg: 10,
};
console.log(
  findValidStartingCity(testCase.distance, testCase.fuel, testCase.mpg)
);

export {};
