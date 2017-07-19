//Redo with BST not initializing a value and thus changing the add function
//Remove recursive remove call and understand why it is not necessary

var node = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

var bst = function(value) {
  this.head = new node(value);
};

bst.prototype.search = function(value) {
  var current = this.head;
  
  while (current) { 
    if (current.value === value) {
      return this.value;
    } else if (value > current.value) {
      current = current.right;
    } else {
      current = current.left;
    }
  }

  return current;
};

bst.prototype.insert = function(value) {
  var current = this.head;

  while (current) {
    if (value > current.value) {
      if (current.right) {
        current = current.right;
      } else {
        current.right = new node(value);
        return current.right.value;
      }
    } else if (value < current.value) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = new node(value);
        return current.left.value;
      }
    } else {
      return null;
    }
  }
};

bst.prototype.remove = function(value) {
  var check2Children = function(node) {
    if (node.left && node.right) {
      return true
    } else if (node.left) {
      return "left";
    } else if (node.right) {
      return "right";
    } else {
      return false;
    }
  };
  var findMinimumOfRight = function(node) {
    var current = node.right;

    while (current) {
      if (current.left) {
        current = current.left;
      } else {
        return (current.value);
      }
    }
  };

  var current = this.head;
  var temp;

  while (current) {
    if (value === current.value) {

    } else if (value > current.value) {
      if (current.right) {
        if (current.right.value === value) {
          if (current.right.left && current.right.right) {
            temp = findMinimumOfRight(current.right);
            this.remove(temp);
            current.right.value = temp;
          } else if (current.right.left) {
            current.right = current.right.left;
          } else if (current.right.right) {
            current.right = current.right.right;
          } else {
            current.right = null;
          }
        } else {
          current = current.right;
        }
      } else {
        return null;
      }
    } else if (value < current.value) {
      if (current.left) {
        if (current.left.value === value) {
          if (current.left.right && current.left.left) {
            temp = findMinimumOfRight(current.left);
            this.remove(temp);
            current.left.value = temp;
          } else if (current.left.right) {
            current.left = current.left.right;
          } else if (current.left.left) {
            current.left = current.left.left;
          } else {
            current.left = null;
          }
        } else {
          current = current.left;
        }
      } else {
        return null;
      }
    }
  }
};

var head = new bst(50);
head.insert(25);
head.insert(10);
head.insert(100);
head.insert(90);
head.insert(150);
head.insert(125);
head.remove(100);
console.log(head);