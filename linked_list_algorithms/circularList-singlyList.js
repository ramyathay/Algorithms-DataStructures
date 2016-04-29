//Circular Singly Linked List - The last node element in the list always points to the first node element

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
  //Prepend node to the List
  this.prepend_node = function(val) {
    var new_node = new Node(val)
    if (node_count == 0) {
      head = new_node
      new_node.next = head
      node_count++
    }
    else {
      var last_node = this.getLastNode()
      var temp_node = head
      head = new_node
      head.next = temp_node
      last_node.next = head
      node_count++
    }
    console.log("Prepended a new node")
  }
  //Insert After node
  this.add_node_after = function(insert_after_node,node_val) {
    if (node_count == 0) {
      console.log("There are no nodes in the List")
    }
    else {
      var current_node = head, isNodeFound = false
      while(current_node.next != head) {
        if(current_node.value == insert_after_node) {
          var new_node = new Node(node_val)
          var save_node = current_node.next
          current_node.next = new_node
          new_node.next = save_node
          node_count++
          console.log("Inserted node after", insert_after_node)
          isNodeFound = true
          break
        }
        else {
          current_node = current_node.next
        }
      }
      if (!isNodeFound) {
        console.log("Node not found in the list")
      }
    }
  }
  //PRINT ALL
	this.traverse_list = function(){
		if (head.next != head) { // HOw to checkif the circular LL has only one lement
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
  //FIND
  this.search_node = function(val) {
    var isFound = true
    var current_node = head
    while(current_node.value != val) {
      if (current_node.next != head) {
        current_node = current_node.next
      }
      else{
        console.log("Element not found in the list",val)
        isFound = false
        break
      }
    }
    if (isFound) {
      console.log("Element",val, "found in the list")
    }
  }
  //DELETE A NODE
  this.remove_node = function(val) {
    if (node_count == 0) {
      console.log("There are no nodes in the List to remove")
    }
    else if(head.value == val){
      if(node_count == 1) {
        head = null
        node_count = 0
        isNodeRemoved = true
      }
      else {
        var last_node = this.getLastNode()
        head = head.next
        last_node.next = head
        isNodeRemoved = true
        node_count--
      }
    }
    else {
      var current_node = head.next
      var prev_node = head, isNodeRemoved = true
      while(current_node.value != val) {
        if (current_node.next != head) {
          prev_node = current_node
          current_node = current_node.next
        }
        else {
          console.log("Element does not exists in the list")
          isNodeRemoved = false
          break
        }
      }
      if (isNodeRemoved) {
        prev_node.next = current_node.next
        console.log("Node",val,"Removed")
      }
    }
  }
  this.getLastNode = function(){
    var current_node = head 
    while(current_node.next != head) {
      current_node = current_node.next
    }
    return current_node
  }
  this.isListCircular = function() {
    var lastNode = this.getLastNode()
    if (lastNode.next == head) {
      console.log("List is Circular")
    }
    else {
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
//sll.search_node(2)
//sll.remove_node(2)
//sll.traverse_list()
//sll.prepend_node(10)
//sll.traverse_list()
sll.add_node_after(5,20)
sll.traverse_list()
sll.isListCircular()

