/* Search an element in a sorted and rotated array
An element in a sorted array can be found in O(log n) time via binary search. But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. 
So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time. */

var sorted_rotated_array = function(array,element) {
	var mid_element = Math.floor((array.length) / 2 )
	if (array[mid_element] == element) {
		console.log("Element",element, "found at",mid_element)
		return true
	}
	else if ((element < array[mid_element]) && (element >= array[0])) {
		//left half
		var left_array = array.slice(0,mid_element)
		console.log(left_array)
		sorted_rotated_array(left_array,element)
	}
	else if ((element < array[mid_element]) && (element < array[0])) {
		//right half
		var right_array = array.slice(mid_element,array.length)
		console.log(right_array)
		sorted_rotated_array(right_array,element)
	}
	else if ((element > array[mid_element]) && (element > array[0])) {
		//left half
		var left_array = array.slice(0,mid_element)
		console.log(left_array)
		sorted_rotated_array(left_array,element)
	}
	else if ((element > array[mid_element]) && (element <= array[array.length - 1])) {
		//right half
		var right_array = array.slice(mid_element,array.length)
		console.log(right_array)
		sorted_rotated_array(right_array,element)
	}
}


sorted_rotated_array([4,5,6,7,0,1,2],5)