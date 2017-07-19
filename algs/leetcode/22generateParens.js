// -- and += will persist the change in the scope passing in the value;
// this first snippet of code will not work

var generateParenthesesFailure = function(x) {
  var result = [];
  var opens = x;
  var closes = x;

  var open = '(';
  var close = ')';

  var addNextParen = function(opens, closes, current) {
    if (opens === 0) {
      if (closes === 0) {
        result.push(current);
      } else {
        addNextParen(opens, --closes, current += close);
      }
    } else if (opens === closes) {
      addNextParen(--opens, closes, current += open);
    } else {
      addNextParen(--opens, closes, current += open);
      addNextParen(opens, --closes, current += close);
    }
  };
  addNextParen(opens, closes, '');

  return result;
};

var generateParentheses = function(x) {
  var result = [];
  var opens = x;
  var closes = x;

  var open = '(';
  var close = ')';

  var addNextParen = function(opens, closes, current) {
    if (opens === 0) {
      if (closes === 0) {
        result.push(current);
      } else {
        addNextParen(opens, closes - 1, current + close);
      }
    } else if (opens === closes) {
      addNextParen(opens - 1, closes, current + open);
    } else {
      addNextParen(opens - 1, closes, current + open);
      addNextParen(opens, closes - 1, current + close);
    }
  };
  addNextParen(opens, closes, '');

  return result;
};


console.log(generateParentheses(3));

