/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const transposedArr = [];

  // need to use matrix[0] length to loop first array of two dimentional array, this is to prevent when first demention and second dimention are not equal
  for (let i = 0; i < matrix[0].length; i++) {
    const col = [];
    // need to use whole matrix length to create a new array with different length when first demention and second dimention are not equal
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }
    transposedArr.push(col);
  }
  return transposedArr;
};

const result = transpose([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(result);
