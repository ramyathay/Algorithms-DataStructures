var arr = [5,3,1,6,7,9,0,4,2]
var sort_count = 0

var bubble_sort = function(array) {
	var element_swapped = false
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				var temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
				element_swapped = true
			}
		}
		if (element_swapped) {
			element_swapped = false
			console.log(array,sort_count++)
		}
		else {
			console.log("All elements are sorted")
			break
		}
	}
	console.log(array)
}

bubble_sort(arr)