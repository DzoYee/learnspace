/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var result = '';
  var length;

  function reverseWord(word) {
    for (var i = word.length-1; i >= 0; i--) {
      result += word[i];
    }
  };

  var splitString = s.split(' ');
  length = splitString.length;
  for (var j = 0; j < length; j++) {
    reverseWord(splitString[j]);
    if(j < length-1) {
      result += ' ';
    }
  }

  return result;
};
