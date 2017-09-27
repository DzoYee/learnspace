/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var rows = [];
  var cols = [];

  var setRow = function(matrix,row) {
    for (var i = 0; i < matrix[row].length; i++) {
      if (matrix[row][i] === "00") {
      } else if (matrix[row][i] === 0) {
        matrix[row][i] = "00";
      } else {
        matrix[row][i] = "0";
      }
    }
  };
  var setCol = function(matrix, col) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[j][col] === "00") {
      } else if (matrix[j][col] === 0) {
        matrix[j][col] = "00";
      } else {
        matrix[j][col] = "0";
      } 
    }
  };

  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0 || matrix[row][col] === "00") {
        if (rows[row] === undefined) {
          setRow(matrix, row);
          rows[row] = true;
        }
        if (cols[col] === undefined) {
          setCol(matrix, col);
          cols[col] = true;
        }
      }
    }
  }

  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === "00" || matrix[row][col] === "0") {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
};
console.log(setZeroes([[0,1],[1,1]]));


