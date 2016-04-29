var array = [0, 7, 1, 2, 6, 4, 9, 3, 8, 5]

var divide_array = function(array,start,end) {
	var new_array = []
	if(end == start) {
		new_array.push(end)
		return new_array
	}
	else {
		var median_index = Math.floor((start + end ) / 2)
		var left_value = divide_array(start,median_index)
		var right_value = divide_array(median_index + 1, end)
		console.log(start,end,left_value,right_value)
		merge_sort(array,left_value,right_value)
	}
}

var merge_sort = function(array,left_value,right_value) {
	var i = 0, j = 0
	while(i < left_value.length || j < right_value.length) {
		if (true) {}
	}
}

var result = divide_array(array,0,array.length - 1)
console.log("Final array is",result)



// while(i < left_value.length || j < right_value.length) {
// 			if(right_value[j] != undefined) {
// 				if (left_value[i] < right_value[j]) {
// 					new_array.push(left_value[i])
// 					i++
// 				}
// 				else {
// 					new_array.push(right_value[j])
// 					j++
// 				}
// 			}
// 		}