/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var temp = [];

  for (var i = nums.length - k; i < nums.length; i++) {
    temp.push(nums[i]);
  }  

  for (i = 0; i < nums.length - k; i++) {
    temp.push(nums[i]);
  }

  return temp;
};

var rotateInPlace = function(nums, k) {
  if (k > nums.length) {
    while (k > nums.length) {
      k -= nums.length;
    }
  }

  var temp = [];

  for (var i = nums.length - k; i < nums.length; i++) {
    temp.push(nums[i]);
  }  

  for (i = nums.length - (k+1); i >= 0; i--) {
    nums[i+k] = nums[i];
  }

  for (i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
  console.log(nums);
};
var nums = [1,2];
console.log(nums)
rotateInPlace(nums, 1);
console.log(nums);

// var rotateInPlace = function(nums, k) {
//   var length = nums.length;
//   while (k > length) {
//     k -= length;
//   }

//   var temp = nums.slice(length - k, length);  
//   var start = nums.slice(0, length - k);

//   nums = temp.concat(start);
//   console.log(nums);
// };
// var nums = [1,2];
// console.log(nums)
// rotateInPlace(nums, 1);
// console.log(nums);
