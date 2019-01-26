import getRandomValue from "./getRandomValue";
import processCombinations from "./processCombinations";

/**
 * @param {String[]} values
 * @param {Number}   width
 * @param {Number}   height
 *
 * @return {Array[]}
 */
export default function generateBoard(values, width, height) {
  const board = [];

  for (let y = 0; y < height; y++) {
    const row = [];

    for (let x = 0; x < width; x++) {
      row.push(getRandomValue(values));
    }

    board.push(row);
  }

  return processCombinations(board, values);
}
