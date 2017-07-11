var zigZag = function(s, numRows) {
  var zigZagArr = [];


};

var findCols = function(s, numRows) {
  var zigZagArr = [];
  
  for (var j = 0; j < numRows; j++) {
    zigZagArr.push([]);
  }

  var len = s.length;
  var rows = numRows;
  var climb = numRows - 2;
  var cols = 0;

  var curRow = 0;
  var curCol = 0;

  var result = '';

  for (var i = 0; i < len; i++) {  

    if (rows === 0) {
      if (climb === numRows - 2) {
        curRow--;
      }

      curRow--;
      curCol++;
      if (curRow < 0) {
        curRow = 0;
      }
    }

    zigZagArr[curRow][curCol] = s[i];

    if (rows === 0 & climb === 0) {
      rows = numRows;
      climb = numRows - 2;
    }
    if (rows > 0) {
      if (rows === numRows) {
        cols++;
      }
      rows--;

      curRow++;

    } else if (rows === 0 && climb > 0) {
      climb--;
      cols++;
    }
  }

  for(var j = 0; j < zigZagArr.length; j++) {
    for (var k = 0; k < zigZagArr[j].length; k++) {
      if (zigZagArr[j][k] !== undefined) {
        result += zigZagArr[j][k];
      } 
    }
  }

  return result;
};

console.log(findCols("ABC", 1));