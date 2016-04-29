var array = [0, 7, 1, 2, 6, 4, 9, 3, 8, 5]

var quick_sort = function(array) {
	if (array.length == 0 || array.length == 1) {
		return array
	}
	else {
		var pivot_index = Math.floor((0 + array.length) / 2 )
		var pivot = array[pivot_index]
		var left_array = [],right_array = []
		for (var i = 0; i < array.length; i++) {
			if (array[i] < pivot) {
				left_array.push(array[i])
			}
			else if (array[i] > pivot){
				right_array.push(array[i])
			}
		}
		var left_result = quick_sort(left_array)
		var right_result = quick_sort(right_array)
		var final_array = left_result + pivot + right_result
		return final_array
	}
}

// var result = quick_sort(array)
// console.log("Final array",result)


var quick_sort_in_place = function(array,start,end) {

	var pivot_index = Math.floor((start + end) / 2)
	var pivot = array[pivot_index]
	var index = 0

	if ((pivot_index - start) == 1 || (pivot_index - start == 0)) {
		console.log("returning",start,end,pivot_index)
		return start
	}
	else if ((end - pivot_index) == 0 || ((pivot_index - end) == 1)) {
		return end
	}
	else {
		var i = start,j = end,temp = 0
		while(i <= j) {
			if (array[i] > pivot && array[j] < pivot) {
				temp = array[i]
				array[i] = array[j]
				array[j] = temp
				i++
				j--
			}
			else {
				if (array[i] <= pivot){
					i++
				}
				if (array[j] >= pivot) {
					j--
				}
			}
			console.log("Array",i,j)
			index = i
		}
		console.log(start,end,pivot_index,array)
		var left_result = quick_sort_in_place(array,start,index)
		var right_result = quick_sort_in_place(array,index + 1, end)
		var final_array = array[left_result] + pivot + array[right_result]
		//console.log(final_array)
		return final_array
	}
}

var swap_fn = function(num1,num2) {
	var temp = num1
	num1 = num2
	num2 = temp
	return num1,num2
}


var result = quick_sort_in_place(array,0,array.length - 1)
console.log("Final array is",result)