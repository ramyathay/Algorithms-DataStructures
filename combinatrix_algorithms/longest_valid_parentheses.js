//Given a String containing just parentheses, find the length of longest valid parentheses substring.
//eg: - "(()" - length is 2
//eg:- ")()())" - length is 4

//A Stack implementation 
function lengthOfParentheses(s) {
	var length = 0, parentheses_stack = []
	for (var i = 0; i < s.length; i++) {
		if (s[i] == '(') {
			parentheses_stack.push(s[i])
		}
		else {
			if (parentheses_stack.length != 0) {
				console.log(s[i],parentheses_stack.length)
				parentheses_stack.pop()
				length+= 2
			}
		}
	}
	return length
} 

console.log(lengthOfParentheses(")()())"))