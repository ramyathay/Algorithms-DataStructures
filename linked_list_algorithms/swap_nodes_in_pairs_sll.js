/* 24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed. */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null) {
        return head
    }
    var curr_node = head,next_node = null,prev_node = null
    if(curr_node.next != null) {
        prev_node = head
        head = curr_node.next
        if(head.next != null) {
            next_node = head.next
            head.next = prev_node
            prev_node.next = next_node
        }
        else {
            head.next = prev_node
            prev_node.next = null
            return head
        }
    }
    else {
        return head
    }
    while(next_node.next != null) {
        var temp = next_node.next
        prev_node.next = temp
        if(temp.next != null) {
            var temp2 = temp.next
            temp.next = next_node
            next_node.next = temp2
            prev_node = next_node 
            next_node = temp2
        } 
        else {
            temp.next = next_node
            next_node.next = null
        }
    }
    return head
};