/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  var result = [];
  var found = false;
  var firstNum = false;
  for (var i = 0; i < findNums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] === findNums[i]) {
        firstNum = true;
      }
      if (firstNum && nums[j] > findNums[i]) {
        result.push(nums[j]);
        found = true;
        break;
      }
    }
    if (found === false) {
      result.push(-1);
    } else {
      found = false;
    }
    firstNum = false;
  }  
  return result;
};


var nextGreaterElement = function(findNums, nums) {
    return findNums.map(n => {
        let found = nums.indexOf(n);
        
        if (found !== -1) {
            // find the next greater element's index
            while (nums[++found] < n);
            // -1 if not found
            if (found >= nums.length) found = -1;
            else found = nums[found];
        }
        
        return found;
    });
};
console.log(nextGreaterElement([4,1,2], [1,3,4,2]));

console.log('a');