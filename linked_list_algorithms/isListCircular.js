var node_count = 0
var head = null

function Node(val) {
	this.value = val
	this.next = null
}
function SinglyLinkedList() {
  //INSERT at the end
	this.add_node = function(node) {
		if(node_count == 0 ) {
			head = node
      head.next = head
      node_count++
      console.log("Added head",node.value)
		}
    else if(node_count == 1) {
      head.next = node
      node.next = head
      node_count++
      console.log("Added node",node.value)
    }
		else {
			var current_node = head
			while(current_node.next != head) {
				current_node = current_node.next
        node_count++
			}
			current_node.next = node
      node.next = head
      node_count++
      console.log("Added node",node.value)
		}
	}
	//PRINT ALL
	this.traverse_list = function(){
		if (head.next != head) { // How to check if the circular LL has only one lement
			var current_node = head
			while(current_node.next != head) {
				console.log("Elements of the list are",current_node.value)
				current_node = current_node.next
			}
			console.log("last element is", current_node.value)
		}
		else {
			console.log("Only head exists",head.value)
		}
	}
	//Is list Circular  -- Using two pointers
	this.isListCircular = function() {
		var runner1 = head
		var runner2 = head
		var isCircular = false
		while(runner2.next.next != null) {
			runner2 = runner2.next.next
			console.log("Runner2",runner2.value)
			if (runner1.next != null) {
				runner1 = runner1.next
				console.log("Runner1",runner1.value)
				if (runner1 == runner2) {
					console.log("Both the runners are equal. Hence it is a circular loop at",runner1.value,runner2.value)
					isCircular = true
					break
				}
			}
		}
		if (!isCircular) {
			console.log("List is not circular")
		}
	}
}

var sll = new SinglyLinkedList()
var n1 =  new Node(2)
sll.add_node(n1)
var n2 = new Node(3)
sll.add_node(n2)
var n3 = new Node(4)
sll.add_node(n3)
var n4 = new Node(5)
sll.add_node(n4)
sll.traverse_list()
sll.isListCircular()