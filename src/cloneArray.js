/**
 * @param {Array} array
 *
 * @return {Array}
 */
export default function cloneArray(array) {
  return array.concat().map(value => Array.isArray(value) ? cloneArray(value) : value);
}
