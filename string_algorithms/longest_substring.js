/* Longest Palindromic Substring 
Given a string, find the longest substring which is palindrome. For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg”. */

function longest_substring(s) {
	var p_string_obj = {},max_string = '',max = 0
	//Finding the start and end point of a possible palindromic sequence
	for (var i = 0 ;i < s.length - 1; i++) {
		for (var j = i + 1; j < s.length; j++) {
			if (s[j] == s[i]) {
				var p_string = check_palindrome(i,j,s)
				if (p_string) {
					p_string_obj[p_string] = p_string.length
				}
			}
		}
	}
	//The palindromic strings were stored in a dict with strings as keys and their resp lengths as values. Now finding the max of them
	for(key in p_string_obj) {
		if (p_string_obj[key] > max) {
			max = p_string_obj[key]
			max_string = key
		}
	}
	return [max,max_string,p_string_obj]
}

//Helper function to check for palindrome
function check_palindrome(start,end,s) {
	var s_start = start,s_end = end
	while(s_start <= s_end) {
		if (s[s_start] == s[s_end]) {
			s_start++
			s_end--
		}
		else {
			return false
		}
	}
	var string = s.slice(start,end + 1)
	return string
}


console.log(longest_substring("forgeeksskeegfor"))

//Time Complexity is O(n3) -> as brute force for picking all startig and ending points to form all the possiblr combinations is O(n2) ad iterating through all the combinations to verify if its palindrome is O(n)
