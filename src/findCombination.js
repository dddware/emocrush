/**
 * @param {Array[]} board
 *
 * @return {Object[]} Coordinates of cells to remove, if any
 *
 * @see https://stackoverflow.com/questions/36144406/how-to-break-on-reduce-method
 */
export default function findCombination(board) {
  return board.concat().reduce((cells, row, y, board) => {
    const onMiddleRow = y > 0 && y < board.length - 1;

    for (let x = 0; x < row.length; x++) {
      if (x > 0 && x < row.length - 1 && board[y][x - 1] === board[y][x] && board[y][x + 1] === board[y][x]) {
        board.splice(1); // break
        return [{ x: x - 1, y }, { x, y }, { x: x + 1, y }];
      }

      if (onMiddleRow && board[y - 1][x] === board[y][x] && board[y + 1][x] === board[y][x]) {
        board.splice(1); // break
        return [{ x, y: y - 1 }, { x, y }, { x, y: y + 1 }];
      }
    }

    return cells;
  }, []);
}
