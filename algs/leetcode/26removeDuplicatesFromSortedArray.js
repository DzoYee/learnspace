/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var pointer1 = 0;
  var length = nums.length;

  for (var pointer2 = 1; pointer2 < nums.length; pointer2++ ) {
    if (nums[pointer2] === nums[pointer1]) {
      length--;
    } else {
      pointer1 = pointer2;
    }
  }

  return length;  
};

console.log(removeDuplicates([1,1,2]))