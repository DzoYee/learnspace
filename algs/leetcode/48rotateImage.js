/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var min = 0;
  var max = matrix.length - 1;
  var layers = max;
  var coordinates;
  
  var move = function(matrix) {
    while(layers > 0) {
      // console.log("layers: ", layers);
      coordinates = [[min,min], [min,max], [max,max], [max,min]];

      // console.log("coordinates: ", coordinates);

      for (var j = 0; j < layers; j++) {

        var tempStack = [matrix[coordinates[coordinates.length-1][0]][coordinates[coordinates.length-1][1]]];

        // console.log("tempStack: ", tempStack);  
        for (var i = 0; i < 4; i++) {
          tempStack.push(matrix[coordinates[i][0]][coordinates[i][1]]);
          matrix[coordinates[i][0]][coordinates[i][1]] = tempStack.shift();
        }

        coordinates[0][1]++;
        coordinates[1][0]++;
        coordinates[2][1]--;
        coordinates[3][0]--;
      }

      tempStack = [];
      layers -= 2;
      min++;
      max--;
    }
  };

  move(matrix);
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));