/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */


[0,0,0];

[0,0];


var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) { return true; }
  if (flowerbed.length === 0) { return false; }

  var canBePlanted = 0;

  var canBePlaced = function(index) {
    if ((flowerbed[index - 1] === 0 || flowerbed[index - 1] === undefined) 
      && (flowerbed[index + 1] === 0 || flowerbed[index + 1] === undefined)) {
      return true;
    }
    return false;
  }

  for (var i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      i++;  
    } else if (canBePlaced(i)) {
      canBePlanted++;
      i++;
    }
  }

  return canBePlanted >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 0));
console.log(canPlaceFlowers([0,0,0,0,0], 3));

console.log(canPlaceFlowers([1,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,1], 1));