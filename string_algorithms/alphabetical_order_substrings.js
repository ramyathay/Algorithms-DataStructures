/* Given a string, find the possible sub strings in alphabetical order
For ex:- for string "abc" , the possible sub strings are
'a' , 'ab','ac','abc','b','bc','c'  */


function in_order_substring(s) {
	var output = [],substrings = {}
	for(var i = 0; i < s.length; i++) {
		substrings[s[i]] = s[i]
		output.push(s[i])
		for (var j = i + 1; j < s.length; j++) {
			var new_string = s[i] + s[j]
			substrings[new_string] = new_string
			output.push(new_string)
		}
		var full_string = s[i] + s.slice(i+ 1)
		if(!substrings.hasOwnProperty(full_string)) {
			output.push(full_string)
		}
	}
	output.sort()
	return output
}

var result = in_order_substring("ba")

for (var i = 0; i < result.length; i++) {
	console.log(result[i])
}