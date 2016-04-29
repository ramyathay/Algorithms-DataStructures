var actual_string = "Do or do not,there is no try."
var word = ""
var word_dict = {}
var count = 0 , size =0
var new_string = ""

for (var i = 0; i < actual_string.length; i++) {
	if (actual_string[i] == ' ' || actual_string[i] == ',' || actual_string[i] == '.' ) {
		word += actual_string[i]
		word_dict[count] = word 
		count++
		word = ""
	}
	else {
		word += actual_string[i]
	}
}
console.log("Word_dict is",word_dict)
//Object does not have the length property so iterate through the keys to get the length
for( key in word_dict) {
	size++
}

for (var j = size; j >=0 ; j--) {
	new_string += word_dict[j] + ' '
}
console.log("New string is",new_string)