var Node = function(val) {
  this.val = val;
  this.right = this.left = null;
};

var connect = function(node) {
  var queue = [node];
  var cur;
  var length = queue.length;

  while (length > 0) {
    cur = queue.shift();
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
    length--;
  }
};


var a = new Node(1);
a.left = new Node(2);
a.left.left = new Node(4);
a.left.left.left = new Node(9);
a.left.right = new Node(5);
a.left.right.right = new Node(8);
a.right = new Node(3);
a.right.right = new Node(7);
a.right.right.right = new Node(10);