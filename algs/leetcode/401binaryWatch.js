/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  var result = [];

  var readBinary = function(array, index, num) {
    if (array[0] === 1 && array[1] === 1 || array[4] && array[5] && array[6] && array[7]) {
      return false;
    } 
    if (num === 0) {
      result.push(calculateTime(array));
      return;
    } 

    for (var i = index; i < array.length; i++) {
      var copy = array.slice();
      copy[i] = 1;
      readBinary(copy, i+1, num - 1);
    }    
  }

  var calculateTime = function(arr) {
    var minutes = 0;
    var hours = 0; 

    var time = "";

    var hoursMap = {
      '0' : 8,
      '1' : 4,
      '2' : 2,
      '3' : 1
    };

    var minutesMap = {
      '4' : 32,
      '5' : 16,
      '6' : 8,
      '7' : 4,
      '8' : 2,
      '9' : 1  
    }

    for (var i = 0; i < arr.length; i++){
      if (arr[i] === 1) {
        if (i < 4) {
          hours += hoursMap[i];
        } else {
          minutes += minutesMap[i];
        }
      }
    }

    
    time += hours + ':';

    if (minutes < 10) {
      time += '0' + minutes;
    } else {
      time += minutes;
    }

    return time;
  };

  readBinary([0,0,0,0,0,0,0,0,0,0], 0, num);
  
  return result;
};

console.log(readBinaryWatch(3));


