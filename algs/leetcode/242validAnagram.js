/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var letterCount = {};
  for (var i = 0; i < s.length; i++) {
    if (letterCount[s[i]] === undefined) {
      letterCount[s[i]] = 0;
    }
    letterCount[s[i]]++;
  } 

  for (i = 0; i < t.length; i++) {
    if (!letterCount[t[i]]) {
      return false;
    } else {
      letterCount[t[i]]--;
    }
  }

  for (var key in letterCount) {
    if (letterCount[key] !== 0) {
      return false;
    }
  }
  return true;
};