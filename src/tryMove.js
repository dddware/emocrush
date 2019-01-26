import cloneArray from "./cloneArray";
import findCombination from "./findCombination";
import processCombinations from "./processCombinations";

/**
 * @param {Array[]}  board
 * @param {Object}   from
 * @param {Number}   from.x
 * @param {Number}   from.y
 * @param {Object}   to
 * @param {Number}   to.x
 * @param {Number}   to.y
 * @param {String[]} values
 *
 * @return {Array[]}
 */
export default function tryMove(board, from, to, values) {
  const newBoard = cloneArray(board);
  [newBoard[to.y][to.x], newBoard[from.y][from.x]] = [newBoard[from.y][from.x], newBoard[to.y][to.x]];

  if (findCombination(newBoard).length > 0) {
    return processCombinations(newBoard, values);
  }

  return board;
}
