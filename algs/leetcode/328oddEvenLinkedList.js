//Me
var oddEvenList = function(head) {
  if (head === null || head.next === null || head.next.next === null) return head;  
    
  var lastOdd = head;
  var lastEven = head.next;
  var nextOdd;

  while (lastEven !== null && lastEven.next !== null) {
    
    nextOdd = lastEven.next;
    if (nextOdd === null) {
      break;
    }
    //Move all the shit around    
    lastEven.next = nextOdd.next;
    nextOdd.next = lastOdd.next;
    lastOdd.next = nextOdd;

    //Move pointers to next target
    lastOdd = lastOdd.next;
    lastEven = lastEven.next;
  }

  return head;
};

//Smart people 

var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }
    if (head.next === null || head.next.next === null) {
        return head;
    }
    var even = head;
    var odd = head.next;
    var oddHead = odd;
    while (odd !== null && odd.next !== null) {
        even.next = even.next.next;
        even = even.next;
        odd.next = odd.next.next;
        odd = odd.next;
        
        
    }
    even.next = oddHead;
    return head;
};
