/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  var globalVisited = {};
  var count = 0;
  var curVisited = {};
  var pointer;
  var max = 0;

  for (var i = 0; i < nums.length; i++ ) {
    if (globalVisited[i] === undefined) {
      pointer = i;
      while (curVisited[i] === undefined) {
        count++;
        curVisited[i] = true;
        globalVisited[i] = true;
        pointer = nums[i];
      }
      if (count > max) { max = count };
      curVisited = {};
      count = 0;
    }
  }

  return max;
};