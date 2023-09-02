const exist = (board: string[][], word: string): boolean => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const hasWord = helper(board, row, col, word);
      if (hasWord) {
        console.log(board);
        return true;
      }
    }
  }
  return false;
};

const helper = (
  board: string[][],
  row: number,
  col: number,
  word: string,
  count: number = 0,
  curIdx: number = 0,
  curStr: string = ""
): boolean => {
  let exist = false;
  const char = board[row][col];
  if (board[row][col] === "-1" || char !== word[curIdx]) return false;
  count = count + 1;
  if (count === word.length) return true;
  board[row][col] = "-1";

  // vertically right
  if (col + 1 < board[row].length) {
    exist ||= helper(
      board,
      row,
      col + 1,
      word,
      count,
      curIdx + 1,
      curStr + char
    );
  }
  // vertically left
  if (col - 1 >= 0) {
    exist ||= helper(
      board,
      row,
      col - 1,
      word,
      count,
      curIdx + 1,
      curStr + char
    );
  }

  // horizontally down
  if (row + 1 < board.length) {
    exist ||= helper(
      board,
      row + 1,
      col,
      word,
      count,
      curIdx + 1,
      curStr + char
    );
  }

  // horizontally up
  if (row - 1 >= 0) {
    exist ||= helper(
      board,
      row - 1,
      col,
      word,
      count,
      curIdx + 1,
      curStr + char
    );
  }
  board[row][col] = char;
  return exist;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "AF"
  )
);

export {};

// Instead of using a , just replace the value of the array to -1 so that it wont be encountered again
