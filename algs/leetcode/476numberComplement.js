//bitwise
//STRINGS ARE IMMUTABLE??
//parseInt to change binary to int. Look this up on how it works
//num >>> 0.toString(2) vs just using toString(2)?

var findComplement = function(num) {
  var binary = (num >>> 0).toString(2);
  var result = '';

  for (var i = 0; i < binary.length; i++) {

    if (binary[i] === '0') {
      result += '1';
    } else {
      result += '0';
    }
  }

  return parseInt(result, 2);

};

console.log(findComplement(5));


var findComplement = function(num) {
    var start = false ;
   for (let i = 31; i >= 0; --i) {
            if (num & (1 << i)) start = true;
            if (start) num ^= (1 << i);
        }
        return num;
};

var findComplement = function(num) {
    let n = num.toString(2).split('');
    
    for (let i = 0, len = n.length; i < len; i++) {
        n[i] = n[i] === '0' ? '1' : '0';
    } 
    
    return parseInt(n.join(''), 2);
};