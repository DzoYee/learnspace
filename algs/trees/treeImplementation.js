var Node = function(data) {
  this.data = data;
  this.children = [];   		
};

var Tree = function(data) {
  // should we have this original node or just set root to null?
  this.root = null;
};

Tree.prototype.add = function(data) {
  var node = new Node(data);
  var parent = this
}

