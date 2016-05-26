// [] -> 1
// [1, 2, 3] -> 4
// [2, 4] -> 1
// [1, 5, 2] -> 3
//[4,2,7,6,1,8] -> 3


function findMissingMin(arr) {
	var min = 1;
	if(arr.length == 0) {
		return 1
	}
	else { // NOT REQUIRED
		arr.sort(function(a,b) {
			return a - b
		})
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > min) {
				break;
			} 
			else if (arr[i] == min) { //NOT REQUIRED DUE TO BREAK
				min += 1
			}
		}
	}
	return min
}

// G's implementation
function findMissingMin(arr) {
	var min = 1;
	if(arr.length == 0) {
		return 1;
	}
	
	arr.sort(function(a, b) {
		return a - b
	})

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > i+1) {
			return i+1;
		}
	}
	
	return arr[arr.length-1]+1;
}


var result = findMissingMin([1, 2, 3])
console.log("Result is",result)
var result = findMissingMin([2, 4])
console.log("Result is",result)
var result = findMissingMin([5, 4])
console.log("Result is",result)
var result = findMissingMin([])
console.log("Result is",result)
var result = findMissingMin([1, 5, 3])
console.log("Result is",result)