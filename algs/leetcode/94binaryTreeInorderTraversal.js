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
var inorderTraversal = function(root) {
  var array = [];

  var traverse = function(node) {  
    if (node) {
      traverse(node.left);
      array.push(node.val);
      traverse(node.right);
    }   
  };

  traverse(root);
};