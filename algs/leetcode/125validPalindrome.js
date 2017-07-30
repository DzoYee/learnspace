/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  var cleanString = "";
  var midpoint;
  for (var i = 0; i < s.length; i ++) {
    if (s[i].match(/[a-zA-Z0-9]/)) {
      cleanString += s[i];
    }
  }
  midpoint = cleanString.length/2;

  var checkOutwards = function(node1, node2) {
    if (cleanString[node1] === undefined && cleanString[node2] === undefined) {
      return true;
    } else if (cleanString[node1] !== cleanString[node2]) {
      return false;
    }

    return checkOutwards(node1-1, node2+1);
  };

  if (cleanString.length % 2 === 0) {
    return checkOutwards(midpoint-1, midpoint);
  } else {
    return checkOutwards(Math.floor(midpoint),Math.floor(midpoint));
  }
};

console.log(isPalindrome('bAb]ab'));


// var cleanString = "babab";
// var checkOutwards = function(node1, node2) {
//     if (cleanString[node1] === undefined && cleanString[node2] === undefined) {
//       return true;
//     } else if (cleanString[node1] !== cleanString[node2]) {
//       return false;
//     }

//     return checkOutwards(node1-1, node2+1);
// };
