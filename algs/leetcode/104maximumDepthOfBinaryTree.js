/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var stack = [root];
  var cur = root;
  var temp;
  
  while (stack.length > 0) {
    if (cur) {
      cur = cur.left;
      stack.push(cur);
    } else {
      temp = stack.pop();
      cur = temp.right;
    }
  }
};

//recursive
var maxDepth = function(root) {
  var depth = 0;

  var recur = function(node, curDepth) {
    if (node) {
      recur(node.left, depth + 1);
      if (curDepth > depth) {
        depth = curDepth;
      }
      recur(node.right, depth + 1);
    }
  };

  recur(root, depth + 1);
};