/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  var candyBag = {};
  var max = candies.length/2;
  var count = 0;

  for (var i = 0; i < candies.length; i ++) {
    candyBag[candies[i]] = true;
  }

  for (var key in candyBag) {
    count++;
  }

  return count < max ? count: max;
};