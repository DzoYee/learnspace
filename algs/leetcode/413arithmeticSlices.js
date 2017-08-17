/**
 * @param {number[]} A
 * @return {number}
 */
var helper = function(length) {
  var total = 0;
  var slices = 1;

  for (var i = length; i >= 3; --i) {
    total += slices++;
  }

  return total;
};

var numberOfArithmeticSlices = function(A) {
  if (A.length < 3) return 0;

  var beginning = 0;
  var ending = 0;
  var difference = A[1] - A[0];
  var totalSlices = 0;

  for (var i = 2; i < A.length; i++) {

    //Same difference
    if (A[i] - A[i-1] === difference) {
      ending = i;
    } else {
    //New Difference
      if (ending - beginning > 1) {
        totalSlices += helper(ending - beginning + 1);
      }
      beginning = ending = i - 1;
      difference = A[i] - A[i-1];
    }
  }

  if (ending - beginning > 1) {
    totalSlices += helper(ending - beginning + 1);
  }

  return totalSlices;
};

console.log(numberOfArithmeticSlices([1,3,5,7,9]));
console.log(numberOfArithmeticSlices([1,1,1]));
console.log(numberOfArithmeticSlices([1,1,1,3,3,3]));
console.log(numberOfArithmeticSlices([1,1,1,3,5,5]));