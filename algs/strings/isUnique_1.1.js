var isUnique = function(string) {
  var characterHash = {};
  
  for (var i = 0; i < string.length; i++) {
    if (characterHash[string[i]]) {
      return true;
    } else {
      characterHash[string[i]] = true;
    }
  }

  return false;
};

console.log(isUnique('dog'));
console.log(isUnique('dod'));

//Time O(n)
//Space O(n)

var isUnique2 = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if (string[j] === string[i]) {
        return true;
      }
    }
  }
  return false;
};

console.log(isUnique('dog'));
console.log(isUnique('dod'));

//Time O(n^2)
//Space O(1)

