var Node = function(val) {
  this.val = val;
  this.next = null;
}

var removeDuplicates = function(head) {
  var current = head;
  var count = {};
  count[head.val] = true;

  while(current.next !== null) {
    if (count[current.next.val] === undefined) {
      count[current.next.val] = true;
      current = current.next;
    } else if (count[current.next.val]) {
      current.next = current.next.next;  
    }
  }

  return head;
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var three2 = new Node(3);
var four = new Node(4);
var four2 = new Node(4);
var five = new Node(5);
one.next = two;
two.next = three;
three.next = three2;
three2.next = four;
four.next = four2;
four2.next = five;

console.log(one);
console.log(removeDuplicates(one));