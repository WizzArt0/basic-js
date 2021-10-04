import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let newArr = [];
  for(var i = 0; i < matrix.length; i++) {
    newArr[i] = [];
    for(var j = 0; j < matrix[i].length; j++) {
      newArr[i][j] = 0;
    }
  }
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] != undefined && matrix[i][j] == true) {newArr[i][j]++};
      if (matrix[i][j+1] != undefined && matrix[i][j+1] == true) {newArr[i][j]++};
      if (matrix[i][j-1] == true) {newArr[i][j]++};


      // if (matrix[i+1][j] != undefined && matrix[i+1][j] == true) {newArr[i][j]++};
      if (typeof(matrix[i-1][j]) == 'undefined') {
        break;
      } else {
        if (matrix[i-1][j] == true) {newArr[i][j]++};
      }
      if (matrix[i+1][j+1] == true) {newArr[i][j]++};
      if (matrix[i+1][j-1] == true) {newArr[i][j]++};
      if (matrix[i-1][j+1] == true) {newArr[i][j]++};
      if (matrix[i-1][j-1] == true) {newArr[i][j]++};
    }
  }
  return newArr;
}
