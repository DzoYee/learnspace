/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var sorted = [];
  var anagramMap = {};
  var results = [];

  for (var i = 0; i < strs.length; i++) {
    sorted.push(strs[i].split("").sort("").join(""));
  }

  for (var j = 0; j < sorted.length; j++) {
    if (anagramMap[sorted[j]] === undefined) {
      anagramMap[sorted[j]] = [];
    }
    anagramMap[sorted[j]].push(strs[j]);
  }

  for (var key in anagramMap) {
    results.push(anagramMap[key]);
  }

  return results;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));