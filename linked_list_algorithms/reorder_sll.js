/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 
 function ListNode(val) {
      this.val = val;
      this.next = null;
  }
var reorderList = function(head) {
    var current_node = head 
    while(current_node.next != null) {
        current_node = change_order(head,current_node.val)
        //console.log(current_node.val)
    }
};

function find_list_tail(head) {
    var current_node = head,prev_node = head
    while(current_node.next != null) {
        prev_node = current_node
        current_node = current_node.next
    }
    return [current_node,prev_node]
}

function change_order(head,value) {
    var current_node = head
    var tail_node = find_list_tail(head)
    while(current_node.next != null) {
        if(current_node.val == value){
            var temp = current_node.next
            current_node.next = tail_node[0]
            tail_node[0].next = temp
            tail_node[1].next= null
            //console.log(temp.val)
            return temp
        }
        else {
            current_node = current_node.next
        }
    }
}
var head = new ListNode(1)
var n1 = new ListNode(2)
var n2 = new ListNode(3)
var n3 = new ListNode(4)
var n4 = new ListNode(5)
head.next = n1
n1.next = n2
n2.next = n3
n3.next = n4

//traverse_list(head)
function traverse_list(head) {
    var current_node = head
    while(current_node.next != null){
        console.log(current_node.val)
        current_node = current_node.next
    }
    console.log(current_node.val)
}

reorderList(head)
traverse_list(head)