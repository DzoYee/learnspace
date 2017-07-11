function oneAway(str1, str2) {
  var differences = 0;
  var i = 0;
  var j = 0;

  while(differences < 2) {
    if (str1[i] !== str2[j]) {
      differences++;
      if (str1[i+1] === str2[j+1]) {
        i++;
        j++;
      } else if (str1[i+1] === str2[j]) {
        i++;
      } else if (str1[i] === str2[j+1]) {
        j++
      }
    } else {
      i++;
      j++;
    }
    if (i === str1.length && j === str2.length) {
      return true;
    }
  }
  
  return false; 


}

function oneAway2(str1, str2) {
  var differences = 0;
  var j = 0;
  var k = 0;
  var length;

  if (str1.length > str2.length) {
    length = str1.length;
  } else {
    length = str1.length;
  }

  for (var i = 0; i < length; i ++) {
    if (str1[j] !== str2[k]) {
      differences++;
      if (str1[j+1] === str2[j+1]) {
        j++;
        k++;
      } else if (str1[j+1] === str2[k]) {
        j++;
      } else if (str1[j] === str2[k+1]) {
        k++;
      }
    }
  }

} 


console.log(oneAway('pale', 'page'));
console.log(oneAway('pale', 'ale'));
console.log(oneAway('ale', 'pale'));
console.log(oneAway('bale', 'pale'));
console.log(oneAway('bale', 'page'));