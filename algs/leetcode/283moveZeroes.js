/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var found = false;

  for (var i=0; i < nums.length; i++) {
    if (!nums[i]) {
      for (var j = i + 1; j < nums.length; j++) {
        if(nums[j]) {
          nums[i] = nums[j];
          nums[j] = undefined;
          found = true;
          break;
        }
      }
      if (!found) {
        for (var k = i; k < nums.length; k++) {
          nums[k] = 0;
        }
        break;
      }
      found = false;
    }    
  }

  return nums;
};

console.log(!undefined);
console.log(!0);
console.log(Boolean(1));