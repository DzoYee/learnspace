var bstIdentical = function(root1, root2) {
  
  var inner = function(root1, root2) {
    if (root1 !== root2) {
      return false; 
    }
    if (root1 === null) return;

    if (inner(root1.left, root2.left) === false) return false;
    if (inner(root1.right, root2.right) === false) return false;
  }

  if (inner(root1, root2) === false) return false;

  return true;
}

var Node = function(val) {
  this.left = this.right = null;
  this.val = val;
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var six = new Node(6);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;

console.log(bstIdentical(one, two));
console.log(bstIdentical(two, two));
