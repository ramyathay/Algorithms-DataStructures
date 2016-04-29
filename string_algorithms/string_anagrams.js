/*Check whether two strings are anagram of each other
Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains same characters,
only the order of characters can be different. For example, “abcd” and “dabc” are anagram of each other. */


var string_anagram = function(string1,string2) {
	if (string1.length != string2.length) {
		console.log("Given strings are not anagrams to each other")
		return false
	}
	else {
		character_map1 = sort_string(string1)
		character_map2 = sort_string(string2)
		var sorted_array1 = character_map1.sort(function(a,b) {
			return a - b
		})
		console.log("Sorted array1",sorted_array1)
		var sorted_array2 = character_map2.sort(function(a,b) {
			return a - b
		})
		console.log("Sorted array2",sorted_array2)

		for(var j = 0; j < sorted_array1.length; j++) {
			if (sorted_array1[j] != sorted_array2[j]) {
				console.log("Strings are not anagram to each other")
				return false
			}
		}
		console.log("strings are Anagrams to each other")
		return true
	}
}


var sort_string = function(string) {
	var ascii_map = []
	for (var i = 0; i < string.length; i++) {
		var char_value = string.charCodeAt(i)
		ascii_map.push(char_value)
	}
	console.log("Ascii Hash Map",ascii_map)
	return ascii_map
}


var result = string_anagram("abc der" , "red cba")
console.log(result)