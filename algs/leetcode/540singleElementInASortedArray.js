/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var found = false;
  var start = 0;
  var end = nums.length-1;
  var midpoint;

  while (found === false) {
    if (start === end) {
      found = true;
    }
    midpoint = Math.floor((end-start)/2);

    if (midpoint % 2 === 0) {
      if (nums[midpoint + 1] === nums[midpoint]) {
        start = midpoint + 2;
      } else {
        end = midpoint;
      }
    } else {
      if (nums[midpoint - 1] === nums[midpoint]) {
        start = midpoint + 1;
      } else {
        end = midpoint - 1;
      }
    }
  }

  return nums[start];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var found = false;
  var start = 0;
  var end = nums.length-1;
  var midpoint;

  var recur = function(array) {
    console.log(array);
    if (array.length === 1) {
      return array[0];
    } else {
      midpoint = Math.floor((array.length-1)/2);

      if (midpoint % 2 === 0) {
        if (array[midpoint + 1] === array[midpoint]) {
          // start = midpoint + 2;
          return recur(array.slice(midpoint+2, array.length));
        } else {
          // end = midpoint;
          return recur(array.slice(0, midpoint+1));
        }
      } else {
        console.log(array[midpoint-1]);
        console.log(array[midpoint]);
        if (array[midpoint - 1] === array[midpoint]) {
          // start = midpoint + 1;
          return recur(array.slice(midpoint+1, array.length));
        } else {
          // end = midpoint - 1;
          return recur(array.slice(0, midpoint));
        }
      }
    }
  };

  return recur(nums);
};
console.log(singleNonDuplicate([0,0,1,1,7,5,5]));
// console.log(singleNonDuplicate([0,1,1,2,2,3,3,4,4,8,8]));
