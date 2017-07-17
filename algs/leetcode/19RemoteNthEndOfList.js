/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var curNode = head;
    var prevNode = null;
    var checkNode;

    while (curNode) {
    	//pointer buthow do you do it with n
    	checkNode = curNode;
    	
    	for (var i = 0; i < n; i++) {
    		checkNode = checkNode.next;

    		if (!checkNode && i < n-1) {
    			console.log('i: ', i);
    			console.log('n: ', n);
    			return false;
    		}
    	}

    	if (checkNode === null) {
    		if (prevNode === null) {
    			head = head.next;
    		} else {
    			prevNode.next = curNode.next;
    		}

    		return head;	
    	}

    	prevNode = curNode;
    	curNode = curNode.next;
    }
	return false; 
};

function ListNode(val) {
	this.val = val;
	this.next = null;
};

var node1 = new ListNode(1);
var node2 = new ListNode(2);
node1.next = node2;
// var node3 = new ListNode(3);
// node2.next = node3;
// var node4 = new ListNode(4);
// node3.next = node4;
// var node5 = new ListNode(5);
// node4.next = node5;

console.log(removeNthFromEnd(node1,1));