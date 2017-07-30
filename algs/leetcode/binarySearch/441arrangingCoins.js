/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  var i = 1;
  while (n > 0) {
    n -= i;
    i++;
  }
  if (n === 0) { return i-1 };
  return i-2
};

var arrangeCoins = function(n) {
  var start = 0;
  var end = n;

  var mid = 0;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if ((mid*mid+mid)/2 <= n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start - 1;
};

console.log(arrangeCoins(100));


// var arrangeCoins = function(n) {
//     if (n <= 0) {
//         return 0;
//     }
    
//     var start = 1;
//     var end = n;
//     while (start <= end) {
//         var mid = start + Math.floor((end - start) / 2);
//         var target = (mid * mid + mid) / 2;

//         if (target === n) {
//             return mid;
//         }else if (target < n) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return start - 1;
// };


// var arrangeCoins = function(n) {
//     var left = 0;
//     var right = n;
//     var mid = 0;
    
//     while(left <= right){
//         mid = (left + right) >> 1;
//         if(mid*(mid+1) <= 2*n) left = mid + 1;
//         else right = mid - 1;
//     }
//     return left - 1;
// };
