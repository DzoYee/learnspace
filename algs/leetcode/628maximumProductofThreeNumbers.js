/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return nums[0] * nums[1];
  }

  var largest = 0;
  var secondLargest = 0;
  var thirdLargest = 0;
  var smallest = 0;
  var secondSmallest = 0;
  var thirdSmallest = 0;
  var temp;


  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > thirdLargest) {
      thirdLargest = nums[i];
      if (thirdLargest > secondLargest) {
        temp = secondLargest;
        secondLargest = thirdLargest;
        thirdLargest = temp;
      }
      if (secondLargest > largest) {
        temp = largest;
        largest = secondLargest;
        secondLargest = temp;
      }
    } else if (nums[i] < thirdSmallest) {
      thirdSmallest = nums[i];
      if (thirdSmallest < secondSmallest) {
        temp = secondSmallest;
        secondSmallest = thirdSmallest;
        thirdSmallest = temp;
      }
      if (secondSmallest < smallest) {
        temp = smallest;
        smallest = secondSmallest;
        secondSmallest = temp;
      }
    }
  }

  if (secondLargest * thirdLargest > smallest * secondSmallest) {
    return largest * secondLargest * thirdLargest;
  } else {
    return smallest * secondSmallest * largest;
  }
};

console.log(maximumProduct([-1,-2,-3]));