/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  var result = [];

  var string = [];
  var index = 0;


  if((nums.length * nums[0].length) !== (r*c)) {
    return nums;
  }

  for (var row = 0; row < nums.length; row++) {
    for (var col = 0; col < nums[row].length; col++) {
      string.push(nums[row][col]);
    }
  }

  for (row = 0; row < r; row++) {
    result[row] = [];
    for (col = 0; col < c; col++) {
      result[row].push(string[index]);
      index++;
    }
  }

  return result;
};