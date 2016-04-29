var num_array = [2,3,4,5,6,7,8,9,10]

function binary_search(search_number,first_index,last_index) {
	//To check crossing of array limits
	if (first_index > num_array.length || first_index < 0 || last_index > num_array.length) {
		var middle_index = Math.floor((num_array[last_index] + num_array[first_index]) / 2)
		var middle_element = num_array[middle_index]
		console.log(first_index,last_index,middle_index)
		if (search_number == middle_element) {
			console.log("Element found at position",middle_index)
			return 
		}
		else {
			if(search_number < middle_element) {
				binary_search(search_number,first_index,middle_index - 1)
			}
			else {
				binary_search(search_number,middle_index + 1,last_index)
			}
		}
	}
	else {
		console.log("element not found in the list")
		return 
	}
}

var bt = binary_search(11,0,num_array.length - 1)