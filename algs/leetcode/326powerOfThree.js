/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  while (n > 3) {
    if (n%3 === 0) {
      n = n/3;
    } else {
      return false;
    }
  }  
  if (n === 3) {
    return true;
  } else {
    return false;
  }
};

var isPowerOfThreeRec = function(n) { 
  if (n === 3) {
    return true;
  }
  if (n%3 === 0) {
    return isPowerOfThreeRec(n/3);
  }
  return false;
};



