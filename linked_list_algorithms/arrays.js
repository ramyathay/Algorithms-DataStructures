// Perform INSERT,DELETE,FIND,PRINT ALL on Arrays

//INSERT
var int_array = []
int_array[0] = 4
int_array.push(8,12,16)
console.log(int_array)

//FIND
//indexOf - finds the index for the given string 
console.log(int_array.indexOf(8))
console.log(int_array[0])

//DELETE
//Where 0 = index position and 1 = no.of elements to remove from there
//Splice removes the array elements in place
int_array.splice(0,1)
console.log("After splice",int_array)
int_array.push(20,24)
//Where 1 and 3 refer to the start and end point(not inclusive) indices to remove
//Slice does not alter the original array
var temp = int_array.slice(1,3)
console.log("After slice temp and original array",temp,int_array)

//PRINT ALL
for (var i = 0; i < int_array.length; i++) {
	console.log("Array Elements are",int_array[i])
}


var char_array = []
char_array[0] = 'a'
char_array.push('b','c','d','e','f','g')
console.log("Char array is",char_array)

console.log(char_array.indexOf('d'))

char_array.splice(2,1)
console.log("After splice is",char_array)
var temp = char_array.slice(0,2)
console.log("After slice is",temp,char_array)
