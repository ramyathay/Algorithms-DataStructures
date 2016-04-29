/* Generate all possible sorted arrays from alternate elements of two given sorted arrays
Given two sorted arrays A and B, generate all possible arrays such that first element is taken from A then from B then from A and so on in increasing order till the arrays exhausted. The generated arrays should end with an element from B.

For Example 
A = {10, 15, 25}
B = {1, 5, 20, 30}

The resulting arrays are:
  10 20
  10 20 25 30
  10 30
  15 20
  15 20 25 30
  15 30
  25 30  */

  var sorted_arrays = function(array1,array2) {
  	var final_array = [],temp_array = []
  	for (var l = 0; l < array1.length; l++) {
  		var i = l, j = 0
  		while(i < array1.length  && j < array2.length) {
	  		if (array1[i] < array2[j]) {
	  			temp_array.push(array1[i],array2[j])
	  			final_array.push([array1[i],array2[j]])
	  			console.log(final_array)
	  			i++
	  			var k = i
	  			while(k < array1.length) {
	  				if (array1[k] > array2[j]) {
	  					j++
	  					break
	  				}
	  				else {
	  					k++
	  				}
	  			}
	  		}
	  		else {
	  			j++
	  		}
	  	}
	  	final_array.push(temp_array)
	  	temp_array = []	
  	}
  	return final_array
  }

  var result = sorted_arrays([10, 15, 25],[1, 5, 20, 30])
  console.log("Final sorted array is",result)