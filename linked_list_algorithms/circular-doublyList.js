var node_count = 0
var head = null, tail = null

function Node(val) {
	this.value = val
	this.prev = null
	this.next = null
}

function DoublyLinkedList() {
	this.addNode = function (val){
		var new_node = new Node(val)
		if(node_count == 0 ) {
			head = new_node
			head.prev = head
			head.next = head
			node_count++
			console.log("Added new node and made it as Head",val)
		}
		else if (node_count == 1) {
			head.next = new_node
			head.prev =new_node
			new_node.next = head
			node_count++
			console.log("Added new node",val)
		}
		else {
			var current_node = head
			while(current_node.next != head) {
				current_node = current_node.next
				node_count++
			}
			node_count++
			new_node.prev = current_node
			current_node.next = new_node
			new_node.next = head
			head.prev = new_node 
			tail = new_node
			console.log("Added new node",val)
		}
	}
	this.addNodeAfter = function(insert_after,node_val) {
		var isElementFound = true
		var current_node = head
		while(current_node.value != insert_after) {
			if(current_node.next != null) {
				current_node = current_node.next
			}
			else {
				console.log("Element to be inserted after, is not found in the list")
				isElementFound = false
				break
			}
		}
		if (isElementFound) {
			var add_node = new Node(node_val)
			add_node.next = current_node.next
			current_node.next = add_node
			console.log("Inserted a new node",node_val,"after", insert_after)
			node_count++
		}
	}
	this.addNodeBefore = function(insert_before,node_val) {
		var current_node = tail
		var isElementFound = true
		while(current_node.value != insert_before) {
			if (current_node.prev != null) {
				current_node = current_node.prev
			}
			else {
				console.log("Element to be inserted before",insert_before,"not found")
				isElementFound = false
				break
			}
		}
		if (isElementFound) {
			var new_node = new Node(node_val)
			new_node.prev = current_node.prev
			current_node.prev = new_node
			console.log("Inserted new node",node_val,"before node",insert_before)
			node_count++
			this.traverseList()
		}
	}
	this.traverseList = function() {
		if (node_count == 0) {
			console.log("There are no nodes in the list")
		}
		else {
			var current_node = head 
			while(current_node.next != head) {
				console.log("LIst elements are",current_node.value)
				current_node = current_node.next
			}
			console.log("last element of the list is", current_node.value)
		}
	}
	this.findNodeFromBegining = function(val) {
		var isElementFound = true
		var current_node = head
		while(current_node.value != val) {
			if(current_node.next != null) {
				current_node = current_node.next
			}
			else {
				console.log("Element not found in the list",val)
				isElementFound = false
				break
			}
		}
		if (isElementFound) {
			console.log("Element found in the list",val)
		}
	}
	this.findNodeFromLast = function(val) {
		var isElementFound = true
		var current_node = tail
		while(current_node.value != val) {
			if (current_node.prev != null) {
				current_node = current_node.prev
			}
			else {
				console.log("Element not found in the list",val)
				isElementFound = false
				break
			}
		}
		if (isElementFound) {
			console.log("Element found in the list",val)
		}
	}
	this.removeNode = function(val) {
		var current_node = head
		if (head.value == val) {
			head = head.next
			head.prev = null
			node_count--
			console.log("Head node is removed")
		}
		else if (tail.value == val) {
			tail = tail.prev
			tail.next =null
			node_count--
			console.log("Tail node is removed")
		}
		else {
			var isElementFound = true
			while(current_node.value != val) {
				if (current_node.next != null) {
					current_node = current_node.next
				}
				else {
					console.log("Element to be removed not found")
					isElementFound = false
					break
				}
			}
			if (isElementFound) {
				current_node = current_node.prev
				current_node.next = current_node.next.next
				console.log("Element removed",val)
				node_count--
			}
		}
	}
	this.isListCircular = function() {
		if(head.prev == tail || tail.next == head) {
			console.log("list is Circular")
		}
		else {
			console.log("Head and tail values are",head.prev, tail.next)
			console.log("List is not circular")
		}
	}

}

var dll = new DoublyLinkedList()
dll.addNode(1)
dll.addNode(2)
dll.addNode(3)
//dll.traverseList()
//dll.findNodeFromBegining(2)
//dll.findNodeFromLast(3)
//dll.findNodeFromLast(6)
//dll.addNodeAfter(3,5)
//dll.traverseList()
//dll.addNodeBefore(2,8)
//dll.removeNode(3)
dll.traverseList()
dll.isListCircular()