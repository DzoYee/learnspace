/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  var invert = function(root) { 
     if (root) {  
        var temp = root.left;
        root.left = root.right;
        root.right = temp;
        invertTree(temp);
        invertTree(root.left);
      }
  }  
  invert(root);
  return root;
};