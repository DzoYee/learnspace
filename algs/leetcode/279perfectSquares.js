var numSquares = function(n) {
  var highestSqrt = Math.floor(Math.sqrt(n));
  var options = [1];
  var result = {0:0, 1:1};
  var min = Infinity;

  for (var i = 2; i <= highestSqrt; i++) {
    options.push(Math.pow(i,2));
  }
  for (var j = 2; j <= n; j++) {
    for (var k = 0; k < options.length; k++) {
      if (j - options[k] < 0) {
        break;
      } else if (result[j - options[k]] !== undefined && result[j - options[k]] + 1 < min) {
        min = result[j - options[k]] + 1;
      }
    }
    result[j] = min;
    min = Infinity;
  }

  return result[n];
};