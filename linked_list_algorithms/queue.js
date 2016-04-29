//Doubly Linked List

function Node(val){
	this.value = val
	this.next = null
	this.prev = null
}

function DoublyList() {
	this.head = null
	this.tail = null
	this.size = 0
	this.enqueue = function(val) {
		var new_node = new Node(1)
		if (this.size == 0) {
			this.head = new_node
			this.tail = new_node
			this.size++
		}
		else {
			new_node.prev = this.tail
			this.tail = new_node
			console.log("Enqueued",val)
		}
	}
	this.dequeue = function() {
		this.head
	}
}