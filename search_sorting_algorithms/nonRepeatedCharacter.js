//Print the first non repeaated Character

var check_string = "teeter"
var compute_array = {}
var count = 0

for (var i = 0; i < check_string.length; i++) {
	if (check_string[i] in compute_array) {
		compute_array[check_string[i]] += 1
	}
	else {
		compute_array[check_string[i]] = count
	}
}
console.log("Compute array is",compute_array)
for (key in compute_array) {
	if(compute_array[key] == 0){
		console.log("The first non repeated character is",key)
		break
	}
}

