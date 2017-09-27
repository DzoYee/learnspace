/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 0) { return ""; }

  var res = ["1"];
  var curNumber;
  var count = 1;
  var nextString = "1";

  for (var i = 2; i <= n; i++) {
    nextString = "";
    for (var j = 0; j < res[i-2].length; j++) {
      if (res[i-2][j] !== curNumber) {
        nextString += count;
        for (var num = count; count > 0; count--) {
          nextString += curNumber;
        }
        curNumber = res[i-2][j];
        count = 0;
      } 
      count++;
    }
    nextString += count;
    
    for (var num = count; count > 0; count--) {
      nextString += curNumber;
    }

    res.push(nextString);
  }

  return nextString;  
};

console.log(countAndSay(2));