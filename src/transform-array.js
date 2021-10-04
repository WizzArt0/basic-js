import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let result = [];
    arr.forEach((item, index) => {
      // if (typeof(arr[index + 1]) !== 'number' || typeof(arr[index - 1]) == 'number') {
      //   return("'arr' parameter must be an instance of the Array!");
      // } 
      if (item == '--double-next') {
        result.push(arr[index + 1]);
      } else if (item == '--double-prev' && typeof(arr[index - 1]) === 'number') {
        result.push(arr[index - 1]);
      } else if (item === '--discard-next') {
        arr.splice(index + 1, 1);
      } else if (item === '--discard-prev' && typeof(arr[index - 1]) === 'number') {
        if (typeof(result[index - 1]) != 'number'){
          return("'arr' parameter must be an instance of the Array!");
        } else {
        result.splice(index - 1, 1);
        }
      } else {
        result.push(item);
      }
    })
    return result;
}
