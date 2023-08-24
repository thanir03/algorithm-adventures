import { identifierToKeywordKind } from "../../node_modules/typescript/lib/typescript";

type Item = {
  weight: number;
  cost: number;
};

const test2: Item[] = [
  { weight: 10, cost: 60 },
  { weight: 20, cost: 100 },
  { weight: 30, cost: 120 },
];

const test3 = [
  {
    cost: 60,
    weight: 10,
  },
  {
    cost: 100,
    weight: 20,
  },
  {
    cost: 120,
    weight: 30,
  },
];

const knapsnack = (totalweight: number, items: Item[]): number => {
  if (totalweight === 0) {
    return 0;
  }
  let maxCost = 0;
  for (let i = 0; i < items.length; i++) {
    if (totalweight >= items[i].weight) {
      let maxCostOfNextNum = knapsnack(
        totalweight - items[i].weight,
        items.filter((item, index) => index != i)
      );
      maxCost = Math.max(maxCost, items[i].cost + maxCostOfNextNum);
    }
  }
  return maxCost;
};

// There is no need to filter the array
// Let's say we picked num 1
// then we picked 2
// then we picked 3

// Return the maximum possible cost

const test1: Item[] = [
  { weight: 1, cost: 2 },
  { weight: 1, cost: 1 },
  { weight: 2, cost: 2 },
  { weight: 4, cost: 10 },
  { weight: 12, cost: 4 },
];

const knapsack = (
  totalWeight: number,
  items: Item[],
  idx: number = 0
): number => {
  // reached the end of the list or totalweight is formed
  if (totalWeight === 0 || idx === items.length) return 0;

  let includedWeight = 0;
  if (totalWeight >= items[idx].weight) {
    includedWeight =
      items[idx].cost +
      knapsack(totalWeight - items[idx].weight, items, idx + 1);
  }
  const excludedWeight = knapsack(totalWeight, items, idx + 1);
  return Math.max(includedWeight, excludedWeight);
};

console.log(knapsack(15, test1));
