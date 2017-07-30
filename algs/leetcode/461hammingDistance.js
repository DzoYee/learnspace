// XOR is one or the other but not both

//https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
// ^ read to understand more about right shift

// string '0' is true not false, only empty string is false

var hammingDistance = function(x, y) {
    var temp = ((x ^ y) >>> 0).toString(2);
    var count = 0;
    
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] === '1') {
            count++;
        }
    }
    
    return count;
};