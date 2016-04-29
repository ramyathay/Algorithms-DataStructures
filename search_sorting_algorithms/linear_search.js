var num_array = [12,35,34,56,86,51,34,8,9,0]
var num_found = false

var linearSearch = function(num_search) {
	for (var i = 0; i < num_array.length; i++) {
		if(num_search === num_array[i]) {
			num_found = true
			break
		}
	}
	if (num_found) {
		console.log("Element found in the list")
	}
	else {
		console.log("Element not found in the list")
	}
}

linearSearch(56)