//Delete a node in a SLL with a given value and no head.


var Node = function(val) {
	this.value = val
	this.next = null
}

var SinglyLinkedList = function(head) {
	this.head = head
	this.insertNode = function(val) {
		var new_node = new Node(val)
		var current_node = this.head
		while(current_node.next != null) {
			current_node = current_node.next
		}
		current_node.next = new_node
		console.log("Inserted new node",val)
	}
	this.traverseList = function() {
		var current_node = this.head
		while(current_node.next != null) {
			console.log(current_node.value)
			current_node = current_node.next
		}
		console.log("Last value",current_node.value)
	}
	//Head is not given, only value to be deleted is given
	this.delete_node_with_value = function(node) {
		node.value = node.next.value
		node.next = node.next.next
	}
}

//create random node to pass for deletion
var random_node = function(head) {
	return head.next.next
}

var head = new Node(1)
var list = new SinglyLinkedList(head)
list.insertNode(2)
list.insertNode(3)
list.insertNode(4)
list.insertNode(5)
var new_node = random_node(list.head)
list.delete_node_with_value(new_node)
list.traverseList()




