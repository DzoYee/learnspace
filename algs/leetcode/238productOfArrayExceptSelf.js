/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var total = 1;
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    total *= nums[i];
  }

  for (var j = 0; j < nums.length; j++) {
    result.push(total / nums[j]);
  }

  return result;
};

//^ That shit don't work because you cant divide by zero

//Naive Approach FIRST!
var productExceptSelf = function(nums) {
  var result = [];
  var temp = 1;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (j !== i) {
        temp *= nums[j];
      }
    }
    result.push(temp);
    temp = 1;
  }

  return result; 
};

