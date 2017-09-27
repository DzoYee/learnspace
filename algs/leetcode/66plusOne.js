/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var res = [];
    var plusOne = parseInt(digits.join('')) + 1;
    plusOne = plusOne.toString();
    
    for (var i = 0; i < plusOne.length; i++) {
        res.push(parseInt(plusOne[i]));
    }
    
    return res;
};