var array = [0, 7, 1, 2, 6, 4, 9, 3, 8, 5]

var divide_array = function(array) {
	if (array.length <= 1) {
		console.log("Single element",array)
		return array
	}
	else {
		var pivot = Math.floor((array.length /2))
		var left = divide_array(array.slice(0,pivot))
		var right = divide_array(array.slice(pivot, array.length))
		console.log(left,right)
		return merge_array(left,right)
	}
}

var merge_array = function(left,right) {
	var i=0,j=0,sorted_array = []
	if (left.length > right.length) {
		var first_array = left
		var second_array = right
	}
	else {
		var first_array = right
		var second_array = left
	}
	while(i < first_array.length || j < second_array.length) {
		if(j < second_array.length) {
			if (first_array[i] < second_array[j]) {
				sorted_array.push(first_array[i])
				console.log("Pushed",first_array[i])
				i++
			}
			else {
				sorted_array.push(second_array[j])
				console.log("Pushed",second_array[j])
				j++
			}
		}
		else if (i < first_array.length){
			sorted_array.push(first_array[i])
			i++
		}
	}
	console.log("Sorted",sorted_array)
	return sorted_array
}

var merge_in_place = function(array,start,end) {
	var mid = (Math.floor((start + end) / 2))
	
}

console.log("Final array is",divide_array(array))