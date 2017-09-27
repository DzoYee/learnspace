/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function(nums) {
  var first = 0;
  var second;
  var total = nums[0];

  for (var i = 1; i < nums.length; i++) {
    if (second !== undefined) {
      if (nums[i] > nums[second] && i === second+1) {
        total = total - nums[second] + nums[i];
      } else if (i === second+2) {
        first = second;
        second = nums[i];
        total += nums[second];
      } 
    } else {
      if (nums[i] > nums[first] && i === first+1) {
        first = i;
        total = total - nums[first] + nums[i];
      } 
      if (i === 2) {
        first = 0;
        total += nums[first];
        second = 2;
      }
    }
  }

  return total;
};

var rob2 = function(nums) {
  if (nums.length === 0) return 0;
  var couldHave;
  var last = 0;
  var total = nums[0];

  for (var i = 1; i < nums.length; i++) {
    if (i === last + 2) {
      total += nums[i];
      last = i;
      couldHave = undefined;
    }
    if (i === last + 1) {
      if (couldHave !== undefined && nums[i] + nums[couldHave] > nums[last]) {
        total = total + nums[couldHave] + nums[i] - nums[last];
        last = i;
        couldHave = undefined;
      } else if (nums[i] > nums[last]) {
        couldHave = last;
        total = total - nums[last] + nums[i];
        last = i;
      } 
    }
  }
  return total;
};

var rob = function(nums) {
  var i = 0;
  var e = 0;
  var tmp;
  for (var j = 0; j < nums.length; j++) {
    tmp = i;
    i = nums[j] + e;
    e = Math.max(tmp, e);
  }
  return Math.max(i,e);
};

console.log(rob([1,7,9,4]));
console.log(rob([5,6,6,5]));

console.log(rob([9]));
console.log(rob([9,1]));
console.log(rob([9,1,1]));
console.log(rob([9,1,1,9]));
console.log(rob([1,8,9]));
console.log(rob([7,8,9]));
console.log(rob([9,8,1,6]));
console.log(rob([9,8,1,6,6]));



