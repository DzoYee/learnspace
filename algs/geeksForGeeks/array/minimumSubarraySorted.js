function minimumSubarraySorted(array) {
  var minimum = array.length;
  var maximum = 0;

  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      if (j < minimum) {
        minimum = j;
      } 
      if (j + 1 > maximum) {
        maximum = j + 1;
      }
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return [minimum,maximum];
}

console.log(minimumSubarraySorted([9,2,5,6,1]));
console.log(minimumSubarraySorted( [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]));
console.log(minimumSubarraySorted([0, 1, 15, 25, 6, 7, 30, 40, 50]));

function betterOne(array) {
  var minIndex;
  var maxIndex;
  var minValue = Infinity;
  var maxValue = -Infinity;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      minIndex = i;
      break;
    }
  }

  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] < array[i-1]) {
      maxIndex = i;
      break;
    }
  }

  for (var i = minIndex; i <= maxIndex; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } 
    if (array[i] > maxValue) {
      maxValue = array[i];
    } 
  }

  for (var i = 0; i < minIndex; i++) {
    if (array[i] > minValue) {
      minIndex = i;
      break;
    }
  }

  for (var i = array.length - 1; i > maxIndex; i--) {
    if (array[i] < maxValue) {
      maxIndex = i;
      break;
    }
  }
  return [minIndex, maxIndex];
}

console.log(betterOne([9,2,5,6,1]));
console.log(betterOne( [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]));
console.log(betterOne([0, 1, 15, 25, 6, 7, 30, 40, 50]));












