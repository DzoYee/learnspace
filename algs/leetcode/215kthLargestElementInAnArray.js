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

BinaryHeap.prototype.getMax = function(value) {
  return this.heap[0];
}


var findKthLargest = function(nums, k) {
  var heap = new BinaryHeap();
  for (var i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
  }
  while (k > 1) {
    heap.delete();
    k--;
  }
  return heap.getMax();
};

console.log(findKthLargest([7,6,5,4,3,1],3));
