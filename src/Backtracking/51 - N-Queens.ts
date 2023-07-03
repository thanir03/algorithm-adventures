// Given n , find the possiblity of placing queens that does not attack each other
// Non attacking queens
// 1. Cannot place another queen horizontally to another queen
// 2. Cannot place another queen vertically to another quuen
// 3. Cannot place another queen diagonally to another queen
// 4. Cannot place another queen anti diagonally to another queen

// Approach : Backtracking

// if row is exceeded : push the output to the array

// loop through the row
// if there no another queen attacking the queen ,
// place queen to the grid and move to the next row
// if the queen cannot be placed by either of cols in the row , return

const buildBoard = (n: number): string[] => {
  return new Array(n).fill(".".repeat(n));
};

const nQueens = (n: number): string[][] => {
  const grid = buildBoard(n);
  const nQueensCombination: string[][] = [];
  helper(grid, nQueensCombination);
  return nQueensCombination;
};

const isValidPosition = (grid: string[], row: number, col: number) => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[row][i] === "Q") return false;
  }
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][col] === "Q") return false;
  }
  let [rowD, colD] = [row, col];
  while (rowD >= 0 && colD >= 0) {
    if (grid[rowD][colD] === "Q") return false;
    rowD--;
    colD--;
  }
  [rowD, colD] = [row, col];

  while (rowD < grid.length && colD < grid.length) {
    if (grid[rowD][colD] === "Q") return false;
    rowD++;
    colD++;
  }
  [rowD, colD] = [row, col];

  while (rowD >= 0 && colD < grid.length) {
    if (grid[rowD][colD] === "Q") return false;
    rowD--;
    colD++;
  }
  [rowD, colD] = [row, col];

  while (rowD < grid.length && colD >= 0) {
    if (grid[rowD][colD] === "Q") return false;
    rowD++;
    colD--;
  }
  return true;
};

const helper = (
  grid: string[],
  nQueensCombination: string[][],
  row: number = 0
): void => {
  if (row === grid.length) {
    nQueensCombination.push([...grid]);
    return;
  }
  for (let col = 0; col < grid.length; col++) {
    if (isValidPosition(grid, row, col)) {
      grid[row] = grid[row].slice(0, col) + "Q" + grid[row].slice(col + 1);
      helper(grid, nQueensCombination, row + 1);
      grid[row] = ".".repeat(grid.length);
    }
  }
};

console.log(nQueens(5));

// Further optimize the solution by using set to track the queens position
// ex : if the queen is placed at row : 2 , col = 2, add rowSet = {2} , add colSet = {2} add UpDiagonal = {col + row} , add DownDiagonal = {row - set}
