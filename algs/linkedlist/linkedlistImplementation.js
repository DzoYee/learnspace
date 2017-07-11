function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
};
SinglyLinkedList.prototype.removeNext = function(data) {
  var current = this.head;
  if (current.data === data) {
    this.head = this.head.next;
    return;
  } 
  
  while(current.next && current.next.data !== data) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next;
  }
};

SinglyLinkedList.prototype.remove = function(data) {
  var current = this.head;
  var prev;
  if (current.data === data) {
    this.head = this.head.next;
    return;
  } 
  
  while(current && current.data !== data) {
    prev = current;
    current = current.next;
  }

  if (current === null) return;
  
  prev.next = current.next;
};

SinglyLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;
  while(current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string);
}


var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.print();
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print();
singlyLinkedList.remove(3);
singlyLinkedList.print();

var singlyLinkedList2 = new SinglyLinkedList();
singlyLinkedList2.print();
singlyLinkedList2.add(1);
singlyLinkedList2.add(2);
singlyLinkedList2.add(3);
singlyLinkedList2.add(4);
singlyLinkedList2.print();
singlyLinkedList2.removeNext(3);
singlyLinkedList2.print();










