var create_queue = function(size) {
	var deque_array = new Array(size)
	var front = -1
	var rear = -1
	return {deque_array,front,rear}
}

var insert_rear_deque = function(array,value,front,rear) {
	if (front == -1 && rear == -1) {
		array[0] = value
		front = 0
		rear = 0
		console.log("inserted first element in the queue",value)
	}
	else if (rear == array.length - 1) {
		console.log("Overflow error")
		return
	}
	else {
		array[rear + 1] = value
		rear += 1
		console.log("inserted at the rear end of queue",array)
	}
	return {array,front,rear}
}

var insert_front_deque = function(array,value,front,rear) {
	if (front == -1 && rear == -1) {
		array[0] = value
		front = 0
		rear = 0
		console.log("inserted first element in Q",value)
	}
	else if (rear == array.length - 1) {
		console.log("Overflow error")
	}
	else {
		for (var i = rear + 1; i > 0; i--) {
			array[i] = array[i - 1]
		}
		array[0] = value
		rear += 1
		console.log("Inserted at front of array",array)
		return {array,front,rear}
	}
}

var remove_rear_deque = function(array,front,rear) {
	if (front == -1 && rear == -1) {
		console.log("Queue is empty, hence cannot remove element")
		return
	}
	else {
		array[rear] = undefined
		rear -= 1
		console.log("removed rear element",array)
		return {array,front,rear}
	}
}

var remove_front_deque = function(array,front,rear) {
	if (front == -1 && rear == -1) {
		console.log("Queue is empty, hence cannot delete")
		return
	}
	else {
		for (var i = 0; i < rear; i++) {
			array[i] = array[i + 1]
		}
		array[rear] = undefined
		rear -= 1
		console.log("removed front queue element",array)
		return {array,front,rear}
	}
}


var new_deque = create_queue(5)
first = insert_rear_deque(new_deque['deque_array'],1,new_deque['front'],new_deque['rear'])
second = insert_rear_deque(first['array'],2,first['front'],first['rear'])
third = insert_front_deque(second['array'],3,second['front'],second['rear'])
fourth = insert_rear_deque(third['array'],4,third['front'],third['rear'])
fifth = remove_rear_deque(fourth['array'],fourth['front'],fourth['rear'])
remove_front_deque(fifth['array'],fifth['front'],fifth['rear'])
