var Node = function(val) {
  this.val = val;
  this.next = null;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

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


head = reverseSLL(head);
console.log(head);

/* Key Concepts */
// One points to the head of the reversed list 
// Second points to next node in line to become newHead;
// Time: O(n);
// Space: O(1);

var reverseSLLTwoPointer = function(head) {
  var reversed = head;
  var toDoList = head.next;
  reversed.next = null;
  var temp;

  while (toDoList) {
    temp = toDoList;
    toDoList = toDoList.next;
    temp.next = reversed;
    reversed = temp;
  }

  return reversed;
}

head = reverseSLL(head);
console.log(head);

/*Recursive
Notes: Use stack memory allocated by OS
Pushing into stack and pop out of stack reverses STUFF DUHH*/

var reverseSLLRecursive = function(head) {
  var reverse;

  var inner = function(head) {
    if (head.next === null) {
      reverse = head;
    } else {
      var temp = reverseSLLRecursive(head.next);
      temp.next = head;
    }
    return head;    
  }

  inner(head);
  return reverse;
}
console.log(reverseSLLRecursive(head));