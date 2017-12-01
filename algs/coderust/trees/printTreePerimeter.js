var Node = function(val) {
  this.val = val;
  this.right = this.left = null;
};

var printPerimeter = function(node) {
  var result = [];
  var stack = [node];
  var length;
  var cur = node;

  while (cur) {
    result.push(cur.val);
    cur = cur.left;
  }

  while (true) {
    if (stack[0].left === null) {
      break;
    }

    length = stack.length;
    while (length > 0) {
      cur = stack.shift();

      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }
      length--;
    }
  }

  for (var i = 1; i < stack.length; i++) {
    result.push(stack[i].val);
  }

  cur = node;
  stack = [];

  while (cur) {
    stack.push(cur.val);
    cur = cur.right;
  }

  for (i = stack.length - 2; i > 0; i--) {
    result.push(stack[i]);
  }

  return result;
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

console.log(printPerimeter(a));
