/*Given an array of distinct elements, rearrange the elements of array in zig-zag fashion in O(n) time. The converted array should be in form a < b > c < d > e < f.

Example: 
Input:  arr[] = {4, 3, 7, 8, 6, 2, 1}
Output: arr[] = {3, 7, 4, 8, 2, 6, 1}

Input:  arr[] =  {1, 4, 3, 2}
Output: arr[] =  {1, 4, 2, 3}  */


var zigZagArray = function(array) {
	for (var i = 0; i < array.length - 1; i++) {
		if (i % 2 == 0) {
			if (array[i] > array[i + 1]) {
				var temp = array[i]
				array[i] = array[i + 1]
				array[i + 1] = temp
			}
		}
		else {
			if (array[i] < array[i + 1]) {
				var temp = array[i]
				array[i] = array[i + 1]
				array[i + 1] = temp
			}
		}
	}
	console.log("Final array is",array)
	return array
}

var result = zigZagArray([1, 4, 3, 2])
console.log(result)

