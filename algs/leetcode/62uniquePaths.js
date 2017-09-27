/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var count = 0;

  var move = function(y, x) {
    if (y === m && n === x) {
      count++;
      return;
    } 
    if (x < n) {
      move(y, x+1);
    }
    if (y < m) {
      move(y+1, x);
    }
  };

  move(1,1); 
  return count;
};

//TLE for larger ones, lets try to do it without recursion


var uniquePaths = function(m, n) {
  var count = 0;

  return count;
};

//Memoization way
//Should we always check or only check if you know there is something there
var uniquePaths = function(m,n) {
  var memo = {"1,1" : 1};

  var stepBack = function(m,n) {
    if (memo[''+m+','+n]) {
      return memo[''+m+','+n];
    }

    var left = 0;
    var up = 0;
    if (n >= 2) {
      left = uniquePaths(m, n-1);
      memo[[m, n-1].toString()] = left; 
    }
    if (m >= 2) {
      up = uniquePaths(m - 1, n);   
      memo[[m-1, n].toString()] = up;
    }

    return up + left;
  }
  return stepBack(m,n);
};

var uniquePaths = function(m,n) {
  var array = [];

  for (var i = 0; i < m; i++) {
    array.push([1]);
  }
  for (var j = 1; j < n; j++) {
    array[0].push(1);
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      array[i][j] = array[i-1][j] + array[i][j-1];
    }
  }

  return array[m][n];
};



