var numbers = [1,2,3,4,5]
var target = 9

var twoSum = function(nums,target) {
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if ((nums[i] + nums[j]) == target) {
				return [i,j]
			}
		}
	}
}

var result = twoSum(numbers,target)
console.log("The result is",result)
