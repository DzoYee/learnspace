/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var last = s.length-1;
  var midpoint = Math.floor(last/2)

  for(var i = 0; i <= midpoint; i++) {
    swap(s,)
  }  
};
// WHOA strings are immutable you can't do this
var swap = function(array, a, b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

var reverseString = function(s) {
  var result = "";
  for (var i = s.length-1; i >=0; i--) {
    result += s[i];
  }
  return result;
};