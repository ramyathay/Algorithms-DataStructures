var array = [8,7,1,2,6,4,9,3,0,5]

var selection_sort = function(array) {
	var min_element = 0
	var temp = 0,j = 0
	while (j < array.length - 1) {
		min_element = j
		for (var i = j + 1; i < array.length; i++) {
			if (array[i] < array[min_element]) {
				min_element = i
			}
		}
		if (min_element != j) {
			temp = array[min_element]
			array[min_element] = array[j]
			array[j] = temp
			console.log(array)
		}
		j++
	}
}

selection_sort(array)