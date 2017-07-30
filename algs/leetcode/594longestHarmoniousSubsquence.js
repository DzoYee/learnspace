/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  var map = {};
  var maxLength = 0;
  var parsedNumber = 0;

  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 0;
    }
    map[nums[i]]++;
  }

  for (var key in map) {
    parsedNumber = parseInt(key);
    if (map[parsedNumber + 1] && map[key] + map[parsedNumber+1] > maxLength) {
      maxLength = map[parsedNumber] + map[parsedNumber+1];
    }
  }

  return maxLength;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));