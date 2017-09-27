/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var hash = {};
  var heap = new BinaryHeap();

  for (var i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]] = 0;
    }
    hash[nums[i]]++;
  }


  
  for (var key in hash) {
    if (k > 0) {
      heap.insert([key, hash[key]]);
    } else {
      if (hash[key] )
    }
  }
  
};

var BinaryHeap = function() {
  this.heap = [];
};

BinaryHeap.prototype.insert = function(value) {
  this.heap.push(value);

  var index = this.heap.length - 1;
  var parentIndex = Math.floor((index - 1)/2);
  var temp;

  while (value > this.heap[parentIndex]) {
    this.heap[index] = this.heap[parentIndex];
    this.heap[parentIndex] = value;
    index = parentIndex;
    parentIndex = Math.floor((index - 1)/2);
  }
};

BinaryHeap.prototype.delete = function() {
  var value = this.heap.pop();
  this.heap[0] = value;

  var index = 0;
  var leftChildIndex = index*2 + 1;
  var rightChildIndex = index*2 + 2;

  while (value < this.heap[leftChildIndex] || value < this.heap[rightChildIndex]) {
    if (value < this.heap[leftChildIndex]) {
      this.heap[index] = this.heap[leftChildIndex];
      this.heap[leftChildIndex] = value;
      index = leftChildIndex;
      leftChildIndex = index*2 + 1;
      rightChildIndex = index*2 + 2;
    } else if (value < this.heap[rightChildIndex]) {
      this.heap[index] = this.heap[rightChildIndex];
      this.heap[rightChildIndex] = value;
      index = rightChildIndex;
      leftChildIndex = index*2 + 1;
      rightChildIndex = index*2 + 2;
    }
  }
};

BinaryHeap.prototype.replace = function(value) {
  this.heap[0] = value;

  var index = 0;
  var leftChildIndex = index*2 + 1;
  var rightChildIndex = index*2 + 2;

  while (value < this.heap[leftChildIndex] || value < this.heap[rightChildIndex]) {
    if (value < this.heap[leftChildIndex]) {
      this.heap[index] = this.heap[leftChildIndex];
      this.heap[leftChildIndex] = value;
      index = leftChildIndex;
      leftChildIndex = index*2 + 1;
      rightChildIndex = index*2 + 2;
    } else if (value < this.heap[rightChildIndex]) {
      this.heap[index] = this.heap[rightChildIndex];
      this.heap[rightChildIndex] = value;
      index = rightChildIndex;
      leftChildIndex = index*2 + 1;
      rightChildIndex = index*2 + 2;
    }
  }
};