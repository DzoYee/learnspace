var isSymmetric = function(root) {
  var compareNodes = function(left, right) {
    if (left === null && right === null) {
      return;
    }
    if (right === undefined && left) {
      if (compareNodes(left.left, left.right) === false) {
        return false;
      }
      return;
    } else if (isDifferent(left, right)) {
      return false;
    } else {    
      if (compareNodes(left.left, right.right) === false) {
        return false;
      }
      if (compareNodes(left.right, right.left) === false) {
        return false;
      }
    }
  }; 

  var isDifferent = function(left, right) {
    if (left === null && right !== null || right === null && left !== null || left.val !== right.val) {
      return true;
    } 
    return false;
  };

  if (compareNodes(root) === false) {
    return false;
  }
  return true;
};
















function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(2);
a.left.left = new TreeNode(4);
a.left.right = new TreeNode(3);
a.right.right = new TreeNode(4);
a.right.left = new TreeNode(3);

console.log(isSymmetric(a));