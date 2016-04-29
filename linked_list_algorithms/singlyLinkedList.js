//Singly Linked List

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
      node_count++
		}
    else if(node_count == 1) {
      head.next = node
      node_count++
    }
		else {
			var current_node = head
			while(current_node.next != null) {
				current_node = current_node.next
        node_count++
			}
			current_node.next = node
      node_count++
		}
	}
  //Prepend node to the List
  this.prepend_node = function(val) {
    var new_node = new Node(val)
    if (node_count == 0) {
      head = new_node
      node_count++
    }
    else {
      var temp_node = head
      head = new_node
      head.next = temp_node
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
      while(current_node.next != null) {
        if(current_node.value == insert_after_node) {
          var new_node = new Node(node_val)
          var temp_node = current_node
          current_node.next = new_node
          new_node.next = temp_node.next
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
  //FIND
  this.search_node = function(val) {
    var isFound = false
    if (head.next != null) {
      var current_node = head
      while(current_node.next != null) {
        if(current_node.value == val) {
          console.log("Found node value in the List",val)
          isFound = true
          break
        }
        else {
          current_node = current_node.next
        }
      }
    }
    else {
      if (head.value == val) {
        console.log("Found value in the List")
      }
    }
    if(!isFound) {
      console.log("Element not found in the list")
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
        head = head.next
        isNodeRemoved = true
        node_count--
      }
    }
    else {
      var current_node = head
      var prev_node = head, isNodeRemoved = false
      for(var i = 0; i < node_count; i++) {
        if (current_node.value == val) {
          prev_node.next = current_node.next
          isNodeRemoved = true
          console.log("Removed node",val)
          node_count--
          break
        }
        else {
          prev_node = current_node
          current_node = current_node.next
        }
      }
    }
    if (!isNodeRemoved) {
        console.log("Element does not exists in the list")
      } 
  }

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
//sll.traverse_list()
var n4 = new Node(5)
sll.add_node(n4)
//sll.traverse_list()
//sll.search_node(2)
//sll.remove_node(5)
sll.traverse_list()
//sll.prepend_node(10)
//sll.traverse_list()
//sll.add_node_after(3,20)
//sll.traverse_list()
sll.isListCircular()
