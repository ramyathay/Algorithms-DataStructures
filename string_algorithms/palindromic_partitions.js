/* Given a input, find all possible palindromic partitions of given input.

Example:
Input: nitin
Output: n i t i n
		n iti n  */


var palindromic_combinations = function(string) {
	var isPalindrome = false, all_palindrome = []
	for (var i = 0; i < string.length; i++) {
		for (var j = i + 1; j < string.length; j++) {
			var new_string = string.slice(i,j + 1)
			var isPalindrome = check_isPalindrome(new_string)
			if (isPalindrome) {
				all_palindrome.push(new_string)
				console.log("Pushed palindrome",new_string,"into array")
			}
		}
	}
	return all_palindrome
}


var check_isPalindrome = function(string) {
	var palindrome = false
	for (var i = 0,j = string.length - 1; j > i; i++,j--) {
		if (string[i] == string[j]) {
			palindrome = true
		}
		else {
			palindrome = false
			return palindrome
		}
	}
	return palindrome
}


var result  = palindromic_combinations("nitin")
console.log(result)


