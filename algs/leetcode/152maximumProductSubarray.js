/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct1 = function(nums) {
  var largest = 0;
  var current;
  var negative;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (current > largest) {
        largest = current;
      }
      negative = undefined;
      current = undefined;
    } else if (nums[i] > 0) {
      if (current === undefined) {
        current = nums[i];
        negative = negative !== undefined ? negative*=nums[i]: undefined; 
      } else {
        current *= nums[i];
        negative = negative !== undefined ? negative*=nums[i]: undefined;
      }
    } else {
      if (negative !== undefined) {
        current = negative * nums[i];
        negative = undefined;
      }
      negative = current ? current*nums[i]:nums[i];
      current = undefined;
    }
  }
  if (current > largest) {
    largest = current;
  }

  return largest;
};

var compare = function() {
  var compare = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] !== undefined) {
      compare.push(arguments[i]);
    }
  }
  return Math.max.apply(null, compare);
}

var maxProduct = function(nums) {
  var largest = -Infinity;
  var includeNegs = undefined;
  var excludeNegs = undefined;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (largest < 0) { largest = 0 }
      else {
        largest = compare(largest, includeNegs, excludeNegs);
        includeNegs = excludeNegs = undefined;
      }
    } else if (nums[i] < 0) {
      includeNegs = includeNegs === undefined ? nums[i] : includeNegs*nums[i];
      excludeNegs = undefined;
      largest = compare(largest, includeNegs, excludeNegs);
    } else if (nums[i] > 0) {
      includeNegs = includeNegs === undefined ? nums[i] : includeNegs*nums[i];
      excludeNegs = excludeNegs === undefined ? nums[i] : excludeNegs*nums[i];
      largest = compare(largest, includeNegs, excludeNegs);
    }
  }
  return largest
};

console.log(maxProduct([1,2,3,4]));
console.log(maxProduct([1,2,0,4]));
console.log(maxProduct([1,2,-1,4]));
console.log(maxProduct([1,2,-1,0,4,-16]));
console.log(maxProduct([-1]))
console.log(maxProduct([0]));