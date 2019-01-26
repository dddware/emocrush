/**
 * @param {Object}   from
 * @param {Number}   from.x
 * @param {Number}   from.y
 * @param {Object}   to
 * @param {Number}   to.x
 * @param {Number}   to.y
 *
 * @return {Boolean}
 */
export default function isAdjacent(from, to) {
  return (from.x === to.x && Math.abs(from.y - to.y) === 1) // above or below
    || (from.y === to.y && Math.abs(from.x - to.x) === 1); // left or right
}
