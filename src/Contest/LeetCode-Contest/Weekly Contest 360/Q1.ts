// Question 1 of leetcode contest

const furthestDistanceFromOrigin = (moves: string) => {
  const distance: number[] = [];
  helper(moves, 0, [], distance);
  console.log(distance);
  return Math.max(...distance);
};

function helper(moves: string, idx: number, arr: number[], distance: number[]) {
  if (idx === moves.length) {
    const sum = arr.reduce((sum, acc) => sum + acc);
    distance.push(Math.abs(sum));
    return;
  }
  let currentMove = moves[idx];
  if (moves[idx] === "_") {
    currentMove = "L";
  }

  if (currentMove === "L") {
    arr.push(-1);
    helper(moves, idx + 1, arr, distance);
    arr.pop();
  }
  if (moves[idx] === "_") {
    currentMove = "R";
  }
  if (currentMove === "R") {
    arr.push(1);
    helper(moves, idx + 1, arr, distance);
    arr.pop();
  }
}

const furthestDistanceFromOrigin2 = (s: string) => {
  let countR = 0;
  let countL = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") countR++;
    else if (s[i] === "L") countL++;
  }
  let replacer = "R";
  if (countL > countR) {
    replacer = "L";
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") count++;
    else if (s[i] === "L") count--;
    else if (s[i] === "_") count += replacer === "R" ? 1 : -1;
  }

  return Math.abs(count);
};

console.log(furthestDistanceFromOrigin2("L_RL__R"));
export {};
