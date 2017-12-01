function removeDuplicates(string) {
  var i = 0;
  var hash = {};

  while (true) {
    if (string[i] === undefined) {
      break;
    } 
    if (hash[string[i]] === undefined) {
      hash[string[i]] = true;
      i ++;
    } else {
      string = string.substr(0, i) + string.substr(i+1, string.length);
    }
  }
  return string;
}

console.log(removeDuplicates("abbacda"));

function removeDuplicateZeroSpace(string) {
  var i = 0;
  var j;

  while (true) {
    if (string[i] === undefined) {
        break;
    }
    j = i+1; 
    while (true) {
      if (string[i] === undefined) {
        break;
      } 
      if (string[j] === string[i]) {
        string = string.substr(0, i) + string.substr(i+1, string.length);
      } else {
        j++;
      }
    }
    i++;
  }
  return string;
}
console.log(removeDuplicateZeroSpace("abbacda"));