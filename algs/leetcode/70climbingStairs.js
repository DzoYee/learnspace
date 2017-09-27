// Memoization Solution
var climbStairs = function(n) {
  var memo = {0:0, 1: 1, 2: 2};

  var climb = function(n) {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    memo[n] = climb(n-1) + climb(n-2);
    return memo[n];
  };
  climb(n);
  return memo[n];
};

//Tabulation
var climbStairs = function(n) {
  var table = {0:0, 1: 1, 2: 2};

  if (n < 3) return table[n];

  for (var i = 3; i <= n; i++) {
    table[i] = table[i-1] + table[i-2];
  } 

  return table[n];
};
