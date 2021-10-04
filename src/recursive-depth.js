import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let maxdepth = 0;
    for(let elem of arr){
        if(typeof elem == 'object'){
          arr = arr.flat();
          var depth = this.calculateDepth(elem);
          if (depth > maxdepth) {maxdepth = depth};         
        }  
    }
    return maxdepth + 1;
  }
}
