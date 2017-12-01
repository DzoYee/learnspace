var moveZerosToLeft = function(array) {
  var zeros = 0;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      zeros++;
    } else {      
      array[i + zeros] = array[i];
    }
  }
  for (i = 0; i < zeros; i++) {
    array[i] = 0;
  }
  return array;
};

console.log(moveZerosToLeft([1,2,3,0,4,0,5,0]));

