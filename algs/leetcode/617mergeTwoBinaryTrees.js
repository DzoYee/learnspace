/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  var head = new TreeNode(t1.val + t2.val);

  var addNodeandTraverse = function(t1, t2, node, direction) {
    if (t1 && t2) {
      node[direction] = new TreeNode(t1.val + t2.val);
    } else if (t1) {
      node[direction] = new TreeNode(t1.val);
    } else if (t2) {
      node[direction] = new TreeNode(t2.val);
    }

    if ((t1 && t1.left) || (t2 && t2.left)) {
      addNodeandTraverse(
        (t1 && t1.left) ? t1.left : null,
        (t2 && t2.left) ? t2.left : null,
        node[direction],
        'left');
    }

    if ((t1 && t1.right) || (t2 && t2.right)) {
      addNodeandTraverse(
        (t1 && t1.right) ? t1.right : null,
        (t2 && t2.right) ? t2.right : null,
        node[direction],
        'right');
    }
  };

  addNodeandTraverse(t1.left, t2.left, head, 'left')
  addNodeandTraverse(t1.right, t2.right, head, 'right')
};