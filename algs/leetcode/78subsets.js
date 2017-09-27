/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var results = [];
  var recur = function(set, pool) {
    results.push(set);

    for (var i = 0; i < pool.length; i++) {
      recur(set.concat(pool[i]), pool.slice(i+1));
    }
  };
  recur([],nums);
  return results;
};

console.log(subsets([1,2,3]));