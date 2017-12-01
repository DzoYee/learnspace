var allParens = function(num) {
  var results = [];

  var inside = function(result, open, closed) {
    if (open === 0 && closed === 0) {
      results.push(result);
    }
    if (open > 0) {
      inside(result + '{', open - 1, closed);
    }
    if (closed > open) {
      inside(result + '}', open, closed - 1);
    }
  };
  inside('', num , num);
  return results;
};

console.log(allParens(3));