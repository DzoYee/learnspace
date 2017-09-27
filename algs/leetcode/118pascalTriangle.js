/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) { return []; }
  if (numRows === 1) { return [[1]]; } 

  var result = [[1]];

  for (var row = 1; row < numRows; row++) {
    result.push([]);
    for (var col = 0; col <= row; col++) {
      result[row][col] = addUndefined(result[row - 1][col - 1], result[row - 1][col]);
    }
  }

  return result;  
};

var addUndefined = function(num1, num2) {
  var a = num1 === undefined ? 0 : num1;
  var b = num2 === undefined ? 0 : num2;

  return a + b;
};

console.log(generate(3));