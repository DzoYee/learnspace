function ListNode(val) {
  this.val = val;
  this.next = null;
}

var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
one.next = two;
two.next = three;



var reverseList = function(head) {
  if (head === null) {
    return [];    
  } else if (head.next === null) {
    return head;  
  }
    
  var previous = null;
  var current = head;
  var next;
  
  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;


    current = next;
  }
  return previous;
};




var reverseManuk = function(head) {
  var result;
  
  var reverseListRecManuk = function(head) {
    var temp;
    if (head.next === null) {
      result = head;
      return head;
    }

    temp = reverseListRecManuk(head.next);
    temp.next = head;

    return head;
  };

  reverseListRecManuk(head);
  head.next = null;
  return result;
};



var reverseJoey = function(head) {
  var result;
  var reverseJoeyInner = function(prev, cur) {
    if (cur.next) {
      reverseJoeyInner(cur, cur.next);
    } else {
      result = cur;
    }
    cur.next = prev;
  };
  reverseJoeyInner(null, head);
  return result;
};

console.log(reverseJoey(one));