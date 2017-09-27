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
var rob = function(root) {
  if (root === null) return [];
  var evenRow = true;
  var odd = 0;
  var even = 0;
  var queue = [root];
  var curr;

  while (queue.length > 0) {
    for (var i = 0; i < queue.length; i++ ){
      curr = queue.shift();
      
      if (evenRow) { 
        even += curr.val; 
      } else { 
        odd += curr.val; 
      }
      
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
       queue.push(curr.right);
      }
    }
    evenRow = !evenRow;
  }  

  return odd > even ? odd : even;
};


var rob = function(root) {
  if (root.max !== undefined) return root.max;
  if (root === null) return 0;

  var val = 0;

  if (root.left !== null) {
    val += rob(root.left.left) + rob(root.left.right);
  }

  if (root.right !== null) {
    val += rob(root.rightleft) + rob(root.right.right);
  }

  root.max = Math.max(val + root.val, rob(root.left) + rob(root.right));

  return root.max;
};











