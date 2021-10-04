import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let pos = [];
  let buf = [];
  for(let elem of arr) {
    if (elem != -1) {
      pos.push(arr.indexOf(elem));
      buf.push(elem);
    }
    buf.sort((a,b) => a-b);
  }
  console.log(pos, buf);
  for(let i = 0; i < pos.length; i++) {
    arr[pos[i]] = buf[i];
  }
  return arr;
}
