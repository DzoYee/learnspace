/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  var total = 0;
  var avg;
  for (var i = 0; i <= k-1; i++) {
    total += nums[i];
  }  

  avg = total/k;


  for (var j = k; j < nums.length; j++) {
    total -= nums[j-k];
    total += nums[j];
    if (total/k > avg) {
      avg = total/k;
    }
  }

  return avg;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));