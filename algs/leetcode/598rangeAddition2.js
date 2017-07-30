/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  if (ops.length === 0) {
    return m*n;
  }
  var minRow = Infinity;
  var minCol = Infinity;
  for (var i = 0; i < ops.length; i++) {
    if (ops[i][0] < minRow) {
      minRow = ops[i][0];
    } 
    if (ops[i][1] < minCol) {
      minCol = ops[i][1];
    } 
  }    

  return minRow * minCol;
};

26
17
[[20,10],[26,11],[2,11],[4,16],[2,3],[23,13],[7,15],
[11,11],[25,13],[11,13],[13,11],[13,16],[26,17]]

console.log(maxCount(0,0, [[3,3], [2,2], [1,1], [1,3], [3,1]]));