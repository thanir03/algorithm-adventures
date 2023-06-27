// Sudoku Solver

// loop through the matrix
// if the number is filled : move to the next box
// if the number is empty : loop through 1 to 9 to find a valid number to place
// move to the next box

// Check whether the number is valid
// if the row does not contain the number
// if the column does not contain the number
// if the 3x3 box does not contain the number

const isValid = (
  matrix: string[][],
  row: number,
  col: number,
  value: number
): boolean => {
  for (let i = 0; i < 9; i++) {
    if (matrix[row][i] === String(value)) return false;
  }

  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] === String(value)) return false;
  }
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (matrix[i][j] === String(value)) return false;
    }
  }
  return true;
};

const solveSudoku = (
  matrix: string[][],
  row: number = 0,
  col: number = 0
): boolean => {
  if (row === 9) {
    return true;
  }
  if (col === 9) {
    return solveSudoku(matrix, row + 1, 0);
  }
  if (matrix[row][col] === ".") {
    for (let i = 1; i <= 9; i++) {
      if (isValid(matrix, row, col, i)) {
        matrix[row][col] = String(i);
        const hasSolution = solveSudoku(matrix, row, col + 1);
        if (!hasSolution) {
          matrix[row][col] = ".";
        } else {
          return hasSolution;
        }
      }
    }
  } else {
    return solveSudoku(matrix, row, col + 1);
  }
  return false;
};

const testCase1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(testCase1);
