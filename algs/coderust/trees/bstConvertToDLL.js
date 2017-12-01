var bstConvertDLL = function(node, direction) {
  if (node === null) {
    return null;
  }
  var left = bstConvertDLL(node.left, "L");
  if (left !== null) {
    node.left = left;
    left.right = node;
  }
  var right = bstConvertDLL(node.right, "R");
  if (right !== null) {
    node.right = right;
    right.left = node; 
  }
  
  if (direction === "L") {
    while (node.right !== null) {
      node = node.right;
    }
  } else if (direction === "R") {
    while (node.left !== null) {
      node = node.left;
    }
  } 

  return node;
};

var Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var a = new Node(100);
var b = new Node(50);
var c = new Node(25);
var d = new Node(30);
var e = new Node(75);
var f = new Node(60);
var g = new Node(200);
var h = new Node(125);
var i = new Node(350);

a.left = b;
a.right = g;
b.left = c;
b.right = e;
e.left = f;
c.right = d;
g.left = h;
g.right = i;

console.log(bstConvertDLL(a));
