/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  var cur = [root];
  var next = [];
  var largest = -Infinity;
  var result = [];

  while (cur.length > 0) {
    for (var i = 0; i < cur.length; i++) {
      if (cur[i].val > largest) {
        largest = cur[i].val;
      }
      if (cur[i].left) {
        next.push(cur[i].left);
      }
      if (cur[i].right) {
        next.push(cur[i].right);
      }
    }
    result.push(largest);
    largest = -Infinity;
    cur = next;
    next = [];
  }

  return result;
};

