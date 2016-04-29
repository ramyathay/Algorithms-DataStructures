function Node(val){
	this.value = val
	this.left = null
	this.right = null
}

function BinarySearchTree() {
	this.root = null
	this.temp_node = null
	this.insertNode = function(val) {
		var new_node = new Node(val)
		if (this.root == null) {
			this.root = new_node
			console.log("Created the head node",val)
		}
		else {
			if (val < this.root) {
				this.insertNodeBranch(this.root,val)
			}
			else {
				this.insertNodeBranch(this.root,val)
			}
		}
	}
	this.insertNodeBranch = function(node,val) {
		if (val < node.value) {
			if (node.left != null) {
				this.insertNodeBranch(node.left,val)
			}
			else {
				var new_node = new Node(val)
				console.log("Inserted new left node",val,"with parent node",node.value)
				node.left = new_node
			}
		}
		else {
			if (node.right != null) {
				this.insertNodeBranch(node.right,val)
			}
			else {
				var new_node = new Node(val)
				console.log("Inserted new right node",val,"with parent node",node.value)
				node.right = new_node
			}
		}
	}
	this.inOrderTraversal = function(node) {
		if (node.left != null ) {
			this.inOrderTraversal(node.left)
		}
		console.log(node.value)
		if (node.right != null) {
			this.inOrderTraversal(node.right)
		}
		else {
			return 
		}	
	}
	this.postOrderTraversal = function(node) {
		if (node.left != null) {
			this.postOrderTraversal(node.left)
			console.log(node.left.value)
		}
		if (node.right != null) {
			this.postOrderTraversal(node.right)
			console.log(node.right.value)
		}
		else {
			return
		}
		if (node.value == this.root.value) {
			console.log(node.value)
		}
	}
	this.preOrderTraversal = function(node) {
		console.log(node.value)
		if (node.left != null) {
			this.preOrderTraversal(node.left)
		}
		if (node.right != null) {
			this.preOrderTraversal(node.right)
		}
		else {
			return
		}
	}
	this.levelOrderTraversal = function(root) {
		var queue = [],current_depth = 0
		if ((root.left != null) && (root.right != null)) {
			queue.push({'node': root.left,'depth': 1},{'node': root.right,'depth': 1})
			console.log(root.value)
		}
		else if ((root.left == null) && (root.right == null)) {
			console.log("Tree contains only one element")
			return 0
		}
		while(queue.length > 0) {
			var current_node = queue[0].node
			current_depth = queue[0].depth
			queue = dequeue(queue)
			console.log(current_node.value,current_depth)

			if (current_node.left != null) {
				queue.push({'node': current_node.left,'depth': current_depth + 1})
			}
			if (current_node.right != null) {
				queue.push({'node': current_node.right,'depth': current_depth + 1})
			}
			if ((current_node.left == null) && (current_node.right == null)) {
				return current_depth
			}
			
		}
		console.log("Completed Traversal with Max Depth(Height of Tree)",current_depth )
	}

	/*Given an array of numbers, return true if given array can represent preorder traversal of a Binary Search Tree, else return false. Expected time complexity is O(n). */
	this.preOrderArray = function(node,array_index,array) {
		
		var previous_index = 0
		console.log(node.value,array[array_index])
		if (node.value == array[array_index]) {
			if ((node.left == null) && (node.right == null)) {
				return array_index
			}
			if (node.left != null) {
				previous_index = this.preOrderArray(node.left,array_index + 1,array)
			}
			else {
				previous_index = array_index
			}
			if (node.right != null) {
				previous_index = this.preOrderArray(node.right,previous_index + 1,array)
			}
			else {
				return previous_index
			}
		}
		else {
			console.log("The Array cannot be a PreOrder traversal of a BST")
			return false
		}
		return previous_index
	}

	/*Least Common Ancestor - This algorithm's time and space complexity is O(h), where h is the height of the tree. The space complexity can be reduced by using iterative solution rather than call stack. */
	this.LCA = function(root,node1,node2) {
		var lca_value = 0
		if ((root.value == node1.value) && (root.value == node2.value)) {
			return root.value
		}
		else {
			console.log(root.value)
			if ((node1.value < root.value) && (node2.value < root.value)) {
				lca_value = this.LCA(root.left,node1,node2)
			}
			else if((node1.value > root.value) && (node2.value > root.value)) {
				lca_value = this.LCA(root.right,node1,node2)
			}
			else {
				return root.value
			}
		}
		return lca_value
	}
}

//Queue Dequeue operation
var dequeue = function(array) {
	for (var i = 0; i < array.length - 1; i++) {
		array[i] = array[i + 1]
	}
	array.pop()
	return array
}

var bst = new BinarySearchTree()
bst.insertNode(7)
bst.insertNode(5)
bst.insertNode(3)
bst.insertNode(4)
bst.insertNode(1)
bst.insertNode(2)
bst.insertNode(8)
bst.insertNode(10)
bst.insertNode(9)
bst.insertNode(12)
// var node = bst.root
// console.log("In Order Traversal is")
// bst.inOrderTraversal(node)
// console.log("Post Order Traversal is")
// bst.postOrderTraversal(node)
// console.log("Pre Order Traversal is")
// bst.preOrderTraversal(bst.root)
// // var min_depth = bst.levelOrderTraversal(bst.root)
// console.log("Min Depth of tree is",min_depth)
// var result = bst.preOrderArray(bst.root,0,[7,5,3,1,2,4,8,10,9,12])
// if (!result) {
// 	console.log("Array is not in the pre order traversal")
// }
// else {
// 	console.log("Array can be represented as preOrder traversal")
// }
var node1 = new Node(9)
var node2 = new Node(12)
var lca = bst.LCA(bst.root,node1,node2)
console.log("LCA is",lca)