function Hashing(key,array_size) {
	this.key = key
	this.array_size = array_size
	this.bucket = new Array(array_size)

	this.addValueToArray = function(key) {
		for (var i = 0; i < this.key.length; i++) {
			var index = (this.key.charCodeAt(i)) % this.array_size
			console.log("Created index",index,"for",this.key[i])
			//Check for collisions
			if (this.bucket[index] != undefined) {
				var current_node = this.bucket[index]
				if (!(current_node instanceof Node)) {
					var node = new Node(current_node)
					var new_node = new Node(this.key[i])
					node.next = new_node
					console.log("Created List at",index,"for value",this.key[i])
				}
				else {
					while(current_node.next != null) {
					current_node = current_node.next
				}
					var node = new Node(this.key[i])
					current_node.next = node
					console.log("Added new node to the list",this.key)
				}
			}
			else {
				this.bucket[index] = this.key[i]
				console.log("inserted",this.key[i],"at",index,"Array",this.bucket)
			}
		}
	}
		

	this.addValueToArray()
}


function Node(val) {
	this.value = val
	this.next = null
	return this
}


Hashing("Ramya",10)