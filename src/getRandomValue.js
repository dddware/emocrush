/**
 * @param {String[]} values
 *
 * @return {String}
 */
export default function getRandomValue(values) {
  return values[Math.floor(Math.random() * Math.floor(values.length))];
}
