/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var total = 0;
  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        if (grid[row - 1] === undefined || (grid[row-1] && grid[row - 1][col] === 0)) {
          total += 2;
        }
        if (!grid[row][col-1]) {
          total += 2;
        }
      }
    }
  }
  return total;
};