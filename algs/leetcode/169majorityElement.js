/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map = {};
  var majority = nums.length/2;

  for (var i = 0; i < nums.length; i ++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 0;
    }
    map[nums[i]]++;
  }    

  for (var key in map) {
    if (map[key] > majority) {
      return parseInt(key);
    }
  }

};

console.log(majorityElement([2,2]))