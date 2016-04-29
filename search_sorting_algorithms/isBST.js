//Algorithm to check if a given Binary Tree is BInary Search Tree.

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
	this.isBST = function(min,max,node) {
		if (node.left != null) {
			if (node.left.value < min) {
				min = node.left.value
				this.isBST(node.left.value,node.value,node.left)
			}
			else {
				console.log("The BT is not a BST",node.left.value,min)
				return 
			}
		}
		if (node.right != null) {
			if (node.right.value > max) {
				this.isBST(min,node.right.value,node.right)
			}
			else {
				console.log("BT is not a BST",node.right.value,max)
				return
			}
		}
		console.log("Bt is BST")
	}
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
var node = bst.root
bst.isBST(node.value,node.value,node)