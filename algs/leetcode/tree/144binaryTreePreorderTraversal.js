

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  var stack = [root];
  var array = [];
  var node = root;

  while (stack.length > 0 && stack[0] !== null) {
    if (node) {
      array.push(node.val);
      node = node.left;
      stack.push(node);
    } else {
      stack.pop();
      node = stack.pop().right;
      stack.push(node);
    }
  }
  return array;
};


var correctPreOrderTraversal = function(root) {
  var res = [];
  if (root === null) { return res };
  var stack = [root];
  var node;

  while (stack.length > 0) {
    node = stack.pop();
    res.push(node.val);
    if (node.right) {stack.push(node.right);}
    if (node.left) {stack.push(node.left);}
  }
  return res;
};

var node1 = new TreeNode(1);
node1.left = new TreeNode(2);

console.log(preorderTraversal(node1));
console.log(correctPreOrderTraversal(node1));