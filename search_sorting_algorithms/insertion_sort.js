var array = [0, 7, 1, 2, 6, 4, 9, 3, 8, 5]

var insertion_sort = function(array) {
	var temp = 0,min_element = 0,key = 0
	for (var i = 1; i < array.length; i++) {
		key = array[i]
		for (var j = i - 1; j >= 0 ; j--) {
			if (key < array[j]) {
				array[j + 1] = array[j]
			}
			else {
				array[j + 1] = key
				console.log("Swapped elements",array)
				break
			}
		}
	}
console.log(array)
}

insertion_sort(array)