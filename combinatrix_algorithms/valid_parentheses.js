var  combo = []

function valid_parentheses(n) {
	var i = n - 1, j = n
	var combs = form_parentheses(i,j,"{")
	return combs
}

function form_parentheses(open,close,p) {
	var result = [],result1 = [],result2 = []
	if((open == 0) && (close == 0)) {
		combo.push(p)
		return p
	}
	if(open <= close){
		if (open != 0) {
			var new_p = p.concat("{")
			result1 = form_parentheses(open - 1,close,new_p)
			//console.log("Open",result1,open,close,p)
			result.push(result1)
			//console.log("Result array is",result)
		}
		if (close != 0) {
			var new_p2 = p.concat("}")
			result2 = form_parentheses(open,close - 1,new_p2)
			//console.log("Close",result2,open,close,p)
			result.push(result2)
			//console.log("Result array is",result)
		}
	}
	return result
}
console.dir(valid_parentheses(3))
