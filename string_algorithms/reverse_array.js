//Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special characters are not affected.
/* Examples:

Input:   str = "a,b$c"
Output:  str = "c,b$a"
Note that $ and , are not moved anywhere.  
Only subsequence "abc" is reversed

Input:   str = "Ab,c,de!$"
Output:  str = "ed,c,bA!$" */


var reverse_string = function(input) {
	var i = 0, j = input.length - 1
	var new_string = new Array(input.length)
	var regex = /^[A-Za-z0-9]+$/
	while(j > i) {
		if (regex.test(input[i])) {
			if (regex.test(input[j])) {
				new_string[i] = input[j]
				new_string[j] = input[i]
				console.log("After swapping",new_string)
				j--
				i++
			}
			else {
				new_string[j] = input[j]
				j--
			}
		}
		else {
			new_string[i] = input[i]
			i++
		}
	}
	new_string[j] = input[j]
	console.log("reversed string is",new_string)
}

reverse_string("a!!!b.c.d,e'f,ghi")
