var Node = function(val) {
  this.val = val;
  this.next = null;
}

var reverseSLL = function(head) {
  var next;
  var cur = head;
  var prev = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log(reverseSLL(head));

