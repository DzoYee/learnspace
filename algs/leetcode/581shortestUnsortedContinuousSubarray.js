var findUnsortedSubarray = function(nums) {
  var minBound = -1;
  var minOutOfPlace = Infinity;
  var minDex;

  var maxBound = nums.length;
  var maxOutOfPlace = -Infinity;
  var maxDex;

  var sorted = nums.slice().sort(function(a,b){return a-b});

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === sorted[i]) {
      minBound = i;
    } else {
      break;
    }
  }

  for (var j = nums.length-1; j >= 0; j--) {
    if (nums[j] === sorted[j]) {
      maxBound = j;
    } else {
      break;
    }

  return maxBound - minBound - 1 > 0 ? maxBound - minBound - 1: 0;
};

console.log(findUnsortedSubarray([1,2,5,4,3]));
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1,2,3,4]));


var findUnsortedSubarray = function(nums) {
  var minBound = -1;
  var minOutOfPlace = Infinity;
  var minDex;

  var maxBound = nums.length;
  var maxOutOfPlace = -Infinity;
  var maxDex;

  var sorted = nums.slice().sort(function(a,b){return a-b});

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === sorted[i]) {
      minBound = i;
    } else {
      break;
    }
  }

  for (++i; i < nums.length; i++) {
    if (nums[i] < minOutOfPlace) {
      minOutOfPlace = nums[i];
      minDex = i;
    }
  }

  for (var j = nums.length-1; j >= 0; j--) {
    if (nums[j] === sorted[j]) {
      maxBound = j;
    } else {
      break;
    }
  }

  for (--j; j >= 0; j--) {
    if (nums[j] > maxOutOfPlace) {
      maxOutOfPlace = nums[j];
      maxDex = j;
    }
  }
  return maxBound - minBound - 1 > 0 ? maxBound - minBound - 1: 0;
};
