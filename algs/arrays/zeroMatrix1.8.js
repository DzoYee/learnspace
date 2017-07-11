function zeroMatrix(matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;
  var rowFlag;

  for(var row = 0; row < rows; row++) {
    rowFlag = false;
    for(var col = 0; col < cols; col++) {
      console.log(matrix[row][col]);
      if (matrix[row][col] === 0) {
        
        for (var i = 0; i < rows; i ++) {
          
          if (matrix[i][col] === 'X') {
            break;
          } else if (matrix[i][col] !== 0) {
            // matrix[i][col] = "Double";
            matrix[i][col] = 'X'
          }

        }

        if (rowFlag === false) {
          for (var j = 0; j < cols; j++) {
            if (matrix[row][j] !== 0) {
              // matrix[i][col] = "Double";
              matrix[row][j] = 'X'
            }
          }        
          rowFlag = true;
        }

      }
    }
  } 

  for(var row = 0; row < rows; row++) {
    for(var col = 0; col < cols; col++) {
      if (matrix[row][col] === 'X') {
        matrix[row][col] = 0;
      }
    }
  }
  for (var k= 0; k < rows; k ++) {
    console.log(matrix[k]);
  }
}

var matrix = [
[0,1,1,0],
[1,1,1,1],
[0,1,1,1],
[1,0,1,1]]

zeroMatrix(matrix);