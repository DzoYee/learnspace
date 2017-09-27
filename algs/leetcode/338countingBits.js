/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var res = [0];
  var squares = [];
  var exponent = 0;
  
  for (var i = 1; i <= num; i ++) {
    if (i === Math.pow(2, exponent)) {
      squares.push(i);
      res.push(1);
      exponent++;
    } else {
      res.push(res[i - squares[squares.length-1]] + 1);
    }
  } 
  return res;   
};

// Internet answerls
var countBits = function(num) {
    let result = [0];
    
    for(let i = 1; i <= num; i++) {
        
        // if even, number of 1s is i / 2
        if (i % 2 === 0) result.push(result[i/2]); 
        
        // if odd, number of 1s is previous i + 1
        else result.push(result[i - 1] + 1);
    }
    
    return result;
};