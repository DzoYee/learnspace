var threeSum = function(nums) {
  var hash = {};
  var third = 0;
  var results = [];
  
  for (var i = 0; i < nums.length; i++) {
      hash[nums[i]] = true;
  }
  
  for (var j = 0; j < nums.length; j++) {
      for (var k = j + 1; k < num.length; k++) {
          third = -1 * (j + k);
          if (hash[third]) {
              results.push([j,k,third]);
          }
      }
  }
};