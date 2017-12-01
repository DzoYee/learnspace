var smallestCommonNumber = function(array1, array2, array3) {
  var map = {
    '1': 0,
    '2': 0,
    '3': 0
  }
  var incr;

  var incrSmallestIndex = function() {
    if (array1[map['1']] < array2[map['2']]) {
      if (array1[map['1']] < array3[map['3']]) {
        map['1']++;
      } else {
        map['3']++;
      }
    } else {
      if (array2[map['2']] < array3[map['3']]) {
        map['2']++;
      } else {
        map['3']++;
      }
    }
  };

  while(map['1'] <= array1.length - 1 || map['2'] <= array2.length - 1 || map['3'] <= array3.length - 1) {
    if (array1[map['1']] === array2[map['2']] && array1[map['1']] === array3[map['3']]) {
      return array1[map['1']];
    }
    incrSmallestIndex();
  }

  return false;
};

console.log(smallestCommonNumber([2,3,4], [4], [0,1,2,3,4]));