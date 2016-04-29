var create_queue = function(size) {
	var circular_array = new Array(size)
	var front = -1
	var rear = -1
	return {circular_array,front,rear}
}

var enqueue = function(array,value,front,rear) {
	if ((front == rear) && (rear == -1)) {
		array[0] = value
		front = 0
		rear = 0
		console.log("Inserted first element",value)
	}
	else if ((rear == front - 1) || ((front == 0) && (rear == array.length - 1))) {
		console.log("Queue Overflow")
	}
	else {
		rear += 1
		if (rear == (array.length)) {
			rear = 0
		}
		array[rear	] = value
		console.log("Inserted value",value,array)
	}
	return {array,front,rear}
}

var dequeue = function(array,front,rear) {
	if ((front == rear) && (rear == -1)) {
		console.log("Queue Underflow")
		return
	}
	else {
		array[front] = undefined
		front = front + 1
		console.log("removed first inserted element",array)
		return {array,front,rear}
	}
}


var v1 = create_queue(4)
v2 = enqueue(v1['circular_array'],1,v1['front'],v1['rear'])
v2 = enqueue(v2['array'],2,v2['front'],v2['rear'])
v2 = enqueue(v2['array'],3,v2['front'],v2['rear'])
v2 = dequeue(v2['array'],v2['front'],v2['rear'])
v2 = enqueue(v2['array'],4,v2['front'],v2['rear'])
v2 = enqueue(v2['array'],5,v2['front'],v2['rear'])