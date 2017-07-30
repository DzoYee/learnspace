/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtreeWrong = function(s, t) {
  var inOrder = function(node) {
    if (node) {
      if (compare(node, t) === true) {
        return true;     
      }

      if (inOrder(node.left)) {
        return true;
      };
      if (inOrder(node.right)) {
        return true;
      }
    }
  };

  var compare = function(node1, node2) {
    if (node1 === null && node2 === null) {
      return; 
    }
    if (node1 && !node2 || !node1 && node2 || node1.value !== node2.value) {
      return false;
    }

    if (compare(node1.left, node2.left)) {
      return true;
    }

    if (compare(node1.right, node2.right)) {
      return true;
    }

    return true;
  }; 

  if (inOrder(s)) {
    return true;
  } else {
    return false;
  }
};

var isSubtree = function(s, t) {
  var inOrder = function(node) {
    if (node) {
      if (node.val === t.val) {
        if (compare(node, t) !== false) {
          return true;
        }
      }
      
      if (inOrder(node.left)) {
        return true;
      }
      if (inOrder(node.right)) {
        return true;
      }
    }
  };

  var compare = function(node1, node2) {
    if (node1 === null && node2 === null) {
      return;
    }
    if (node1 && !node2 || !node1 && node2 || node1.val !== node2.val) {
      return false;
    }
    if (compare(node1.left, node2.left) === false) {
      return false;
    }
    if (compare(node1.right, node2.right) === false) {
      return false;
    } 
  };

  if (inOrder(s)){
    return true;
  } else {
    return false;
  }
};




















