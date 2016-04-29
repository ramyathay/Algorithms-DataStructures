var binaryNode = require('./binaryNode.js')

function BinaryTree() {
	this.root = null
	this.current_node = null
	this.insertNode = function (val) {
		if (this.root == null) {
			this.root = binaryNode.Node(val)
			this.current_node = this.root
			console.log("Root node created",this.root.value)
		}
		else {
			var newNode = binaryNode.Node(val)
			console.log("New Node inserted",newNode.value)
		}
		return this
	}
	this.insertLeftNode = function (val) {
		if (this.current_node.left != null) {
			this.current_node = this.current_node.left
		}
		else {
			var newNode = binaryNode.Node(val)
			if (this.root.left == null) {
				this.root.left = newNode
			}
			else {
				this.current_node.left = newNode
			}
			console.log("Created a left node in the Tree",newNode.value,this.root.left)
			this.current_node = this.root
		}
		return this
	}
	this.insertRightNode = function(val) {
		if (this.current_node.right != null) {
			this.current_node = this.current_node.right
		}
		else {
			var newNode = binaryNode.Node(val)
			if (this.root.right == null) {
				this.root.right = newNode
			}
			else {
				this.current_node.right = newNode
			}
			console.log("Created a right node in the Tree",newNode.value,this.root.right)
			this.current_node = this.root
		}
		return this
	}
	this.left = function() {
		this.current_node = this.current_node.left
		return this
	}
	this.right = function() {
		this.current_node = this.current_node.right
		return this
	}
}

var create_binaryTree = new BinaryTree()
create_binaryTree.insertNode(1).insertLeftNode(2).insertRightNode(3)
create_binaryTree.left().insertLeftNode(4)
create_binaryTree.left().insertRightNode(5)
create_binaryTree.left().left().insertLeftNode(8)
create_binaryTree.left().right().insertRightNode(9)
create_binaryTree.right().insertLeftNode(6)
create_binaryTree.right().insertRightNode(7)
create_binaryTree.right().right().insertLeftNode(10)
