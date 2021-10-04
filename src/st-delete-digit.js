import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arrDigits = n.toString().split('');
    let end = [];
  
    for (let i = 0; i < arrDigits.length; i++) {
      let test = arrDigits.slice();
      test.splice(i, 1);
      let result = '';
      for (let elem of test) {result += elem};
      end.push(Number(result));
    }
    return Math.max.apply(null, end);
}
