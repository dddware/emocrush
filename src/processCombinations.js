import findCombination from "./findCombination";
import updateBoard from "./updateBoard";
import getRandomValue from "./getRandomValue";

/**
 * @param {Array[]}  board
 * @param {String[]} values
 *
 * @return {Array[]} Board after all combinations have been processed sequentially
 */
export default function processCombinations(board, values) {
  let cells;

  while ((cells = findCombination(board)).length > 0) {
    board = updateBoard(board, cells, () => getRandomValue(values));
  }

  return board;
}
