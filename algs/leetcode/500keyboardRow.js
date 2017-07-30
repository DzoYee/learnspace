var findWords = function(words) {
  var rowMap = {
    q: 1,
    w: 1, 
    e: 1, 
    r: 1, 
    t: 1, 
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2, 
    f: 2,
    g: 2,
    h: 2,
    j: 2, 
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3
  };

  var curRow;
  var workingWord;
  var curWord;
  var valid = true;

  var results = [];

  for (var i = 0; i < words.length; i++) {
    curWord = words[i];
    workingWord = curWord.toLowerCase();
    
    for (var j = 0; j < workingWord.length; j++) {
      if (j === 0) {
        curRow = rowMap[workingWord[j]];
      } else if (curRow !== rowMap[workingWord[j]]) {
          valid = false;
          break;
      }
    }
    if (valid === true) {
      results.push(curWord);
    } else {
      valid = true;
    }
  }    

  return results;
};




