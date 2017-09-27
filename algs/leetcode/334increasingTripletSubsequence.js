/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  var a = Infinity;
  var b = Infinity;
  var temp;

  for (var i = 0; i < nums.length; i++) {
    temp = nums[i]; 
    if (temp <= a) {
      a = temp;
    } else if (temp <= b) {
      b = temp;
    } else {
      return true;
    }
  }
  return false;
};

// var increasingTriplet2 = function(nums) {
//   var a = Infinity;
//   var b = Infinity;

//   nums.forEach(function(val) {
//     console.log(val);
//     if (val <= a) {
//       a = val
//     } else if (val <= b) {
//       b = val;
//     } else {
//       return true;
//     }  
//   });
//   return false;
// };
console.log(increasingTriplet([5,1,5,5,2,5,4]));
console.log(increasingTriplet2([5,1,5,5,2,5,4]));

