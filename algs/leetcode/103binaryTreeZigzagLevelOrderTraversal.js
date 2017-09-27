/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder1 = function(root) {
  if (root === null) {return []};
  var result = [];
  var temp = [];
  var store1 = [root];
  var store2 = [];
  var length1;
  var length2;

  while (store1.length > 0 || store2.length > 0) {
    length1 = store1.length;
    length2 = store2.length;

    if (length1 > 0) {
      for (var i = 0; i < length1; i++) {
        if (store1[0].left) {
          store2.push(store1[0].left);
        }
        if (store1[i].right) {
          store2.push(store1[0].right);
        }
        temp.push(store1[0].val);
        store1.shift();  
      }
      result.push(temp);
      temp = [];
      length1 = store1.length;
      length2 = store2.length;
    } else {
      for (var j = length2-1; j >= 0; j--) {
        if (store2[j].right) {
          store1.push(store2[j].right);
        }
        if (store2[j].left) {
          store1.push(store2[j].left);
        }
        temp.push(store2[j].val);
        store2.pop();
      }
      result.push(temp);
      temp = [];
      length1 = store1.length;
      length2 = store2.length;
    }
  }
  return result;
};

var zigzagLevelOrder = function(root) {
  if (root === null) {return []};

  var result = [];
  var temp = [];
  var store1 = [root];
  var store2 = [];

  while (store1.length > 0 || store2.length > 0) {
    if (store1.length > 0) {
      for (var i = 0; i < store1.length; i++) {
        if(store1[i].left) store2.push(store1[i].left);
        if(store1[i].right) store2.push(store1[i].right);
        temp.push(store1[i].val);
      }
      result.push(temp);
      temp = [];
      store1 = [];
    } else {
      for (i = 0; i < store2.length; i++) {
        if(store2[i].left) store1.push(store2[i].left);
        if(store2[i].right) store1.push(store2[i].right);
        temp.push(store2[i].val);
      }
      result.push(temp.reverse());
      temp = [];
      store2 = [];
    }
  }
  return result;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);
node.right.left = new TreeNode(15);
node.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(node))































