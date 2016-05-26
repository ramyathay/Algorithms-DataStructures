/* Longest Palindromic Substring 
Given a string, find the longest substring which is palindrome. For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg”. */

//Optimized solution - Time Complexity O(n2)

function longest_palindrome(s) {
	var p_string = {},start = 0,end = 0,max = ''
	for (var i = 1; i < s.length; i++) {
		//Odd length palindrome 'aca'
		if(s[i - 1] == s[i + 1]) {
			for(var j = i - 1, k = i + 1;  j>= 0, k < s.length; j--,k++) {
				if (s[j] != s[k]) {
					break;
				}
				else {
					start = j
					end = k
					var temp = s.slice(start,end + 1)
					p_string[temp] = temp.length
					//Store every palindrome in an object{key = string, value = its length} and also check against max(the length of the longest palindrome)
					if(temp.length > max.length) {
						max = temp
					}
				}
			}
			var temp = s.slice(start,end + 1)
			p_string[temp] = temp.length
			if(temp.length > max.length) {
				max = temp
			}
		}
		//Even length palindrome 'acca'
		if(s[i] == s[i - 1]) {
			for(var j = i - 1, k = i ;  j>= 0, k < s.length; j--,k++) {
				if (s[j] != s[k]) {
					break;
				}
				else {
					start = j
					end = k
					var temp = s.slice(start,end + 1)
					p_string[temp] = temp.length
					if(temp.length > max.length) {
						max = temp
					}
				}
			}
			var temp = s.slice(start,end + 1)
			p_string[temp] = temp.length
			if(temp.length > max.length) {
				max = temp
			}
		}
	}
	return p_string,max
}


console.log(longest_palindrome('abcbgteetg'))