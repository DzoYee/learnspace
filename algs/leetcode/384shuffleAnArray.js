/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.save = nums.slice();
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.save.slice();
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  var j;
  var swap = function(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  for (var i = this.nums.length - 1; i > 0; i--) {
    j = Math.floor(Math.random()*(i+1));
    swap(this.nums, i, j);
  }

  return this.nums;
};

Solution.prototype.get = function() {
  return this.nums;
}

var a = [1,2,3];
var b = new Solution(a);
var c = b.shuffle();
console.log(c);
var c = b.shuffle();
console.log(c);
b.reset();
console.log(b.get());


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */