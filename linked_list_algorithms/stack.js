//Using arrays

var Stack = function(array_size) {
	this.array = []		//Stack Implentation Structure
	this.maxSize = array_size
	this.top = 0
	this.arrayPush = function(array_item) {
		if (this.top < this.maxSize) {
			this.array[this.top] = array_item
			this.top++
			console.log("Pushed item",array_item,"To the list")
		}
		else {
			console.log("Overflow error")
		}
	}	
	this.traverseArray = function () {
		for (var i = 0; i < this.array.length; i++) {
			console.log("Array elements are",this.array[i])
		}
	}
	this.popArray = function() {
		this.array.splice(this.top - 1,1)
		this.traverseArray()
	}
}

var new_stack = new Stack(5)
new_stack.arrayPush(1)
new_stack.arrayPush(2)
new_stack.popArray()
new_stack.traverseArray()

//Using Linked List

function Node(val) {
	this.value = val
	this.next = null
}

function SinglyLinkedList() {
	this.size = 0
	this.top = null
	this.listPush = function(val) {
		var new_node = new Node(val)
		if (this.size == 0) {
			this.top = new_node
			this.size++
			console.log("Added first element in the stack",val)
		}
		else {
			new_node.next = this.top
			this.top = new_node
			this.size++
			console.log("Pushed element to the stack",val)
		}
	}
	this.listPop = function(){
		this.top = this.top.next
	}
	this.traverseList = function() {
		var current_node = this.top
		while(current_node.next != null) {
			console.log("Stack elements are",current_node.value)
			current_node = current_node.next
		}
		console.log("First stack element is ",current_node.value)
	}
}

var sll = new SinglyLinkedList()
sll.listPush(1)
sll.listPush(2)
sll.listPush(3)
sll.listPop()
sll.traverseList()



