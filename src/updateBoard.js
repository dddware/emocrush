/**
 * @param {Array[]}  board
 * @param {Object[]} cells
 * @param {Function} getValue
 *
 * @return {Array[]}
 */
export default function updateBoard(board, cells, getValue) {
  return cells.reduce((board, cell) => {
    if (cell.y > 0) {
      // Make value "fall" from cell above
      board[cell.y][cell.x] = board[cell.y - 1][cell.x];

      // Recursively update cell above
      return updateBoard(board, [{ x: cell.x, y: cell.y - 1 }], getValue);
    }

    // We're at the top, just inject a new value
    board[cell.y][cell.x] = getValue();

    return board;
  }, board);
}
