/*   Pythagorean Triplet in an array
Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.

Example:

Input: arr[] = {3, 1, 4, 6, 5}
Output: True
There is a Pythagorean triplet (3, 4, 5).

Input: arr[] = {10, 4, 6, 12, 5}
Output: False
There is no Pythagorean triplet.   */


//Efficient solution :- Use Hash map to store the squared sum of two numbers as key in a dict with tehir indices as an array value:- O(n2) . Then look up the dict for the remaining value:- O(n)
var pythagorean = function (array) {
	var count = 0
	var squared_sum = new Object()
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) { 
			var sum = (array[i] * array[i]) + (array[j] * array[j])
			squared_sum[sum] = [i,j] 
		}
	}

	for (var k = 0; k < array.length; k++) {
		if (squared_sum.hasOwnProperty(array[k] * array[k])) {
			count += 1
		}
	}
	return count
}

var result = pythagorean([10, 4, 6, 12, 5])
console.log(result)