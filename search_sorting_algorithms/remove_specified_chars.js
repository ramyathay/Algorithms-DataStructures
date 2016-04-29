var actual_string = "Battle of the vowels: Hawaii vs Grozny"
var string_to_remove = "aeiou"
var final_string = actual_string

//Using Built in String functions:-
//var final_string = actual_string.replace(/a|e|i|o|u/gi,'');

for (var i = 0; i < string_to_remove.length; i++) {
	for (var j = 0; j < final_string.length; j++) {
		if (final_string[j] == string_to_remove[i]) {
			final_string = final_string.replace(string_to_remove[i],'')
			console.log(final_string)
		}
	}
}
console.log("Final string is",final_string)