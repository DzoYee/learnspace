var lowestCommonAncestor = function(root, p, q) {
  var path = [];
  var pPath;
  var qPath;
  var pPoint = 0;
  var qPoint = 0;

  var recurse = function(node, target) {
    var a;
    var b;
    if (node !== null) {
      path.push(node);
      if (node.val === target.val) {
        return path;
      } else {
        a = recurse(node.left, target);
        if (a) {
          return a;
        }
        b = recurse(node.right, target);
        if (b) {
          return b;
        }
      }
    }
  };
  pPath = recurse(root, p);
  path = [];
  qPath = recurse(root, q);

  console.log(pPath);
  console.log(qPath);
  // while (pPath[pPoint].val === qPoint[qPoint].val) {
  //   pPoint++;
  //   qPoint++;
  // }

  // return pPath[--pPoint];
};

