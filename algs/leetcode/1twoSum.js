/**
 * @param {string} s
 * @return {number}
 */

 //ab cabc bb
var lengthOfLongestSubstring = function(s) {
  var start = 0;
  var end = 0;
  var hash = {};
  var length = 0;
  var longestLength = 0;
  var result = "";
  
  for (var i = 0; i < s.length; i++ ) {
    if (hash[s[i]] >= 0 && hash[s[i]] >= start) {
        start = hash[s[i]] + 1;
    } 

    hash[s[i]] = i;  

    end = i;
    
    length = end - start + 1;
    
    if (longestLength < length) {
        longestLength = length;
        result = s.substring(start, end + 1);
    }
  }
  
  return result.length;
};

console.log(lengthOfLongestSubstring('abba'));