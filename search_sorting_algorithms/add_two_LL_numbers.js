var node_count = 0

function Node(val) {
	this.value = val
	this.next = null
}
function SinglyLinkedList() {
	this.add_node = function(node) {
		if(node_count == 0 ) {
			head = node
		}
		else {
			var current_node = head
			while(current_node.next != null) {
				current_node = current_node.next
			}
			current_node.next = node
		}
	}
	this.traverse_list = function(){
		if (head.next != null) {
			var current_node = head
			while(current_node.next != null) {
				console.log("Elements of the list are",current_node.value)
				current_node = current_node.next
			}
			console.log("last element is", current_node.value)
		}
		else {
			console.log("Only head exists",head.value)
		}
	}
}

var sll = new SinglyLinkedList()
var n1 =  new Node(2)
sll.add_node(n1)
var n2 = new Node(3)
sll.add_node(n2)
var n3 = Node(4)
sll.add_node(n3)
sll.traverse_list()



// function SinglyLinkedList() {
// 	this.add_node = function(node) {
// 		if (head.next == null  && head.value == node.value) {
// 			head.value  = node.value
// 		}
// 		else if(head.next == null) {
// 			head.next = node
// 		}
// 		else {
// 			var current_node = head
// 			while(current_node.next != null) {
// 				current_node = current_node.next
// 			}
// 			current_node.next = node
// 		}
// 	}


