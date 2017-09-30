var insertionSort = function(head) {
  var sorted = [head];
  var current = head.next;
  var temp = [];
  var tempNode;

  while (current) {
    if (sorted[sorted.length - 1] && current.val < sorted[sorted.length - 1].val) {
      temp.push(sorted.pop());
    } else {
      tempNode = current.next;
      sorted.push(current);
      sorted[sorted.length - 2].next = sorted[sorted.length - 1];
      while (temp.length > 0) {
        sorted.push(temp.pop());
        sorted[sorted.length - 2].next = sorted[sorted.length - 1];
      }
      sorted[sorted.length - 1].next = tempNode;
      current = tempNode;
    }
  }
  return head;
};

var Node = function(val) {
  this.val = val;
  this.next = null;
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
one.next = three;
three.next = two;
two.next = five;
five.next = four;

console.log(insertionSort(one));
