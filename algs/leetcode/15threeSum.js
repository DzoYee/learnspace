/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var hash = {};
  var third = 0;
  var results = [];
  
  var foundHash = {};
  
  for (var i = 0; i < nums.length; i++) {
      if (!hash[nums[i]]) {
        hash[nums[i]] = 1;
      } else {
        hash[nums[i]]++;
      }
  }
  console.log('hash ', hash);
  
  for (var j = 0; j < nums.length; j++) {
      for (var k = j + 1; k < nums.length; k++) {
          third = -1 * (nums[j] + nums[k]);
          if (hash[third]) {
              if (!(foundHash[nums[j]] && foundHash[nums[k]])) {
                  if (checkDuplicate(hash, [nums[j],nums[k], third])) {
                    console.log([nums[j],nums[k],third]);
                    results.push([nums[j],nums[k],third]);
                    pushPermutations(foundHash, [nums[j], nums[k], third]);
                  } 
              }
          }
      }
  }
  return results;
};

var pushPermutations = function(object, nums) {
    object[nums[0]] = {}
    object[nums[0]][nums[1]] = nums[2];
    object[nums[1]] = {};
    object[nums[1]][nums[2]] = nums[0];
    object[nums[2]] = {};
    object[nums[2]][nums[0]] = nums[1];
};

var checkDuplicate = function(hash, nums) {
  if(nums[0] === nums[2] || nums[0] === nums[1]) {
    return hash[nums[0]] > 1;
  } else if (nums[1] === nums[2]) {
    return hash[nums[1]] > 1;
  } else {
    return true;
  }
};

console.log(threeSum([-1,0,1,2,-1,-4]));