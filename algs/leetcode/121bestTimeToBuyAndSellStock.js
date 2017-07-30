// No need to keep track of highest

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0;
  }
  var lowest = prices[0];
  var highest = prices[0];
  var profit = 0;

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
      highest = prices[i];
    } else if (prices[i] > highest) {
      highest = prices[i];
      if (highest - lowest > profit) {
        profit = highest - lowest;
      }
    }
  }
  return profit;  
};