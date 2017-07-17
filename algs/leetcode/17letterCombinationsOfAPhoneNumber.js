/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) {
    return false;
  }
  var result = [];
  var numberToLetter = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  var subRoutine = function(curDigits, index) {
    var currentLetters = numberToLetter[digits[index]];
    var nextNumber = digits[index + 1];

    for (var i = 0; i < currentLetters.length; i++) {
      if (nextNumber) {
        subRoutine(curDigits + currentLetters[i], index + 1);
      } else {
        result.push(curDigits + currentLetters[i]);
      }
    }  
  };

  subRoutine('',0);

  return result;
};

console.log(letterCombinations('23'));
