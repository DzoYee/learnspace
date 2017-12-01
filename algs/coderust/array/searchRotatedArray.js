var searchRotatedArray = function(array, val) {
  var start = 0;
  var end = array.length - 1;
  var midpoint = Math.floor((end)/2);
  var pivot;

  var convertCompare = function(array, index, pivot) { 
    return index + pivot > array.length - 1 ? index + pivot - array.length : index + pivot;
  };

  //finds the midPoint

  while(end - start > 1) {
    if (array[start] > array[midpoint]) {
      end = midpoint;
    } else if (array[end] < array[midpoint]) {
      start = midpoint;
    }
    midpoint = Math.floor((end - start)/2 + start);
  }

  pivot = end;

  start = 0;
  end = array.length - 1;
  midpoint = Math.floor((end)/2);

  while(start !== end) {
    if (array[convertCompare(array, midpoint, pivot)] > val) {
      end = midpoint - 1;
    } else if (array[convertCompare(array, midpoint, pivot)] < val) {
      start = midpoint + 1;
    }
    midpoint = Math.floor((end - start)/2 + start); 
  }

  // return midpoint;
  return val === array[convertCompare(array, midpoint, pivot)];
};

console.log(searchRotatedArray([1,2,5,6,7,8,10,31,0], 5));

//FUCK YOU DONT NEED TO KNOW THE PIVOT JUST THE HALF IS ALWAYS SORTED
