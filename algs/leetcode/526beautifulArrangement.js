/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  var possible = 0;

  var isBeautiful = function (number, index) {
    if (number % index === 0 || index % number === 0) {
      return true;
    } else {
      return false;
    }
  };

  var countRecur = function(number, index) {
    for (var i = index; i < N; i++) {
      if (isBeautiful(number, index)) {
        countRecur()
      }
    }
  };

  countRecur(1, 1);

};


var makePermuations = function (N) {
  var perms = [];
  var choices = [];

  for (var i = 1; i <= N; i++) {
    choices.push(i);
  }

  var recur = function(array, choices, index) {
    choices[j-1] = j-1;
    for (var j = 0; j < choices.length; j++) {
      if (choices[j]) {
        array[index] = choices[j];
        choices[j] = undefined;
        recur(array, choices, index+1);
      }
    }
  };

  recur([], choices, 0);
};










