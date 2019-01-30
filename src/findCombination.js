/**
 * @param {Array[]} board
 *
 * @return {Object[]} Coordinates of cells to remove, if any
 */
export default function findCombination(board) {
  return board.concat().reduce((cells, row, y, board) => {
    const onEdgeRow = y === 0 || y === board.length - 1;
    let rowCombination = [];

    for (let x = 0; x < row.length; x++) {
      let combination = [];

      if (x > 0 && x < row.length - 1 && row[x - 1] === row[x] && row[x + 1] === row[x]) { // horizontal
        if (x >= 2 && row[x - 2] === row[x]) {
          combination.push({ x: x - 2, y });
        }

        combination.push({ x: x - 1, y });
        combination.push({ x, y });
        combination.push({ x: x + 1, y });

        if (board[y - 1][x - 1] === row[x] && board[y - 2][x - 1] === row[x])

        if (x < row.length - 2 && row[x + 2] === row[x]) {
          combination.push({ x: x + 2, y });
        }
      } else if (!onEdgeRow && board[y - 1][x] === row[x] && board[y + 1][x] === row[x]) { // vertical
        if (y >= 2 && board[y - 2][x] === row[x]) {
          combination.push({ x, y: y - 2 });
        }

        combination.push({ x, y: y - 1 });
        combination.push({ x, y });
        combination.push({ x, y: y + 1 });

        if (y < board.length - 2 && board[y + 2][x] === row[x]) {
          combination.push({ x, y: y + 2 });
        }
      }

      // Keep best combination found from current row
      if (combination.length > rowCombination.length) {
        rowCombination = combination;
      }

      combination = [];
    }

    // Keep best combination overall
    return rowCombination.length > cells.length ? rowCombination : cells;
  }, []);
}
