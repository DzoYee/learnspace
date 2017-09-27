/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  var abCombo = {};
  var cdCombo = {};  
  var count = 0;

  findCombinations(abCombo, A, B);
  findCombinations(cdCombo, C, D);

  for (var key in abCombo) {
    if (cdCombo[-1 * key]) {
      count += abCombo[key] * cdCombo[-1 * key];
    } 
  }
  return count;
};

var findCombinations = function(hash, array1, array2) {
  array1.forEach(function(value1){
    array2.forEach(function(value2){
      if (hash[value1 + value2] === undefined) {
        hash[value1 + value2] = 0;
      }
      hash[value1 + value2]++;
    });
  });
};

//No need to do that last nested for loop since we can just add which we are doing the combinations in CD.

var fourSumCount = function(A, B, C, D) {
    let map = new Map();
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            map.set(A[i] + B[j], (map.get(A[i] + B[j]) || 0) + 1);
        }
    }
    
    for (let k = 0; k < C.length; k++) {
        for (let h = 0; h < D.length; h++) {
            result += map.get(-(C[k] + D[h])) || 0;
        }
    }
    return result;
};

//sick top result