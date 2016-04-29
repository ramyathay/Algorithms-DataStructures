/*Given an array of distinct integers and a sum value. Find count of triplets with sum smaller than given sum value. Expected Time Complexity is O(n2).

Examples:

Input : arr[] = {-2, 0, 1, 3}
        sum = 2.
Output : 2
Explanation :  Below are triplets with sum less than 2
               (-2, 0, 1) and (-2, 0, 3) 

Input : arr[] = {5, 1, 3, 4, 7}
        sum = 12.
Output : 4
Explanation :  Below are triplets with sum less than 4
               (1, 3, 4), (1, 3, 5), (1, 3, 7) and 
               (1, 4, 5)  */


var count_triplets = function(array,sum) {
	var count = 0
	for (var i = 0; i < array.length; i++) {
		for (var j = i + 1; j < array.length - 1; j++) {
			for (var k = 1; k < array.length; k++) {
				var triplet_sum = array[i] + array[j] + array[j + k]
				if (triplet_sum < sum) {
					count += 1
					console.log(array[i],array[j], array[j + k])
				}
			}
			
			console.log(array[i],array[j], array[j + 1])
		}
	}
	return count
}

//Efficient solution
var count_triplets_sort = function(array,sum) {
	var sum_hmap = {},sum = 0,count = 0
	for (var i = 0; i < array .length; i++) {
		for (var j = i + 1; j < array.length; j++) {
			sum = array[i] + array[j]
			if (sum_hmap.hasOwnProperty(sum)) {
				sum_hmap[sum].push(i,j)
			}
			else {
				sum_hmap[sum] = [i,j]
			}
		}
	}
	console.log("Hmap",sum_hmap)

	for (var key in sum_hmap) {
		var l = 0
		var sum_indices = sum_hmap[key]
		for (var k = 0; k < array.length; k++) {
			if ((sum_indices[l] !== k) || l > sum_indices.length) {
				var triple_sum = array[k] + parseInt(key)
				console.log(triple_sum)
				if (triple_sum < sum) {
					count += 1
					k++
				}
			}
			else if (l < sum_indices.length){
				k++
				l++
			}
			else {
				k++
			}
		}
	}
	console.log("count",count)
}


// var result = count_triplets([5, 1, 3, 4, 7],12)
// console.log("Final count is",result)


count_triplets_sort([-2,0,1,3],2)