var boggle = function(grid, dictionary) {
  var results = [];
  var temp;

  var boggleInner = function(nextLetters, usedCoordinates, currentCoordinates, word) {
    if (nextLetters.length === 0) {
      return word;
    }
    for (var row = currentCoordinates[0] - 1; row <= currentCoordinates[0] + 1; row++) {
      for (var col = currentCoordinates[1] - 1; col <= currentCoordinates[1] + 1; col++) {
        if (grid[row] !== undefined && usedCoordinates[row.toString() + ',' + col.toString()] === undefined && grid[row][col] === nextLetters[0]) {
          temp = boggleInner(nextLetters.substr(1), usedCoordinates[row.toString() + ',' + col.toString()] === true, [row, col], word);
          if (temp) return temp;
          usedCoordinates[row.toString() + ',' + col.toString()] === undefined;
        }
      }
    }
  }

  // for (var key in dictionary) {
  results.push(boggleInner("at", {'0,0':true}, [0,0], 'cat'));
  // }

  return results;
}

var array = [
  ['c', 'd', 'f'],
  ['b', 'a', 'h'],
  ['t', 'd', 'a']
]

console.log(boggle(array, {cat:true}));