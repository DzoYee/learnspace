// var swapBack = function(array, index) {
//     var temp = array[index];
//     array[index] = array[index-1];
//     array[index-1] = temp;
// };

// var nextPermutation = function(nums) {
//     var temp = nums.slice().sort(function(a,b){return b-a}); 
    
//     for (var i = 0; i < temp.length; i++) {
//         if (temp[i] !== nums[i]) {
//             for (var j = 0; j < nums.length; j++) {
//                 if (temp[i] === nums[j]) {
//                     swapBack(nums, j);
//                     return;
//                 }
//             }
//         }
//     }
//     nums.reverse();
// };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = function(array, index, index2) {
  // console.log("swap");
  // console.log(index);
  // console.log(index2);
  var temp = array[index];
  array[index] = array[index2];
  array[index2] = temp;
  // console.log(array);
};

var nextPermutation = function(nums) {
  var pivot;
  var startFlip;
  var temp;

  //go until you find some decreasing order meaning i-1 is less than i
  //i-1 is the pivot point
  for (var i = nums.length-1; i >= 0; i--) {
    if (nums[i-1] < nums[i]) {
      pivot = i-1;
      startFlip = i;
      break;
    }
  }
  console.log("pivot: ", pivot);
  console.log("startFlip: ", startFlip);

  //swap pivot point with right most
  swap(nums, nums.length-1, pivot)

  console.log( Math.floor(nums.length - 1 - startFlip));

  // for (var j = 0; j <= Math.floor(nums.length - startFlip); j++) {
  //   swap(nums, j+startFlip, nums.length - 1 - j);
  // }
};

var array = [1,2,3];
nextPermutation(array);
console.log(array)

var array2 = [1,3,2];
nextPermutation(array2);
console.log(array2)



