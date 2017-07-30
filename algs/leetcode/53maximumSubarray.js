// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//   var start;
//   var end;

//   var target = 0;
//   var total = 0;

//   for (var i = 0; i < nums.length; i++) {
//     total += nums[i];

//     if (total === target) {
//       start = i;
//       target = nums[i];
//       total = nums[i];
//     } else if (total > target) {
//       end = i;
//       target = total;
//     }
//   }
//   return nums.slice(start, end + 1);

// };

var maxSubArray = function(nums) {
  var total = 0;
  var max = -Infinity;
  var toBeat = 0;
  for (var i = 1; i < nums.length; i ++) {
    total += nums[i];
    if (total > max) {
      max = total;
      if (total >= toBeat) {
        total = nums[i];
        max = total;
        toBeat = total;
      }
    }
  }
  return max;
};

var maxSubArrayBrute = function(nums) {
};
var maxSubArrayDivideAndConquer = function(nums) {
};
var maxSubArrayKadane = function(nums) {
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
