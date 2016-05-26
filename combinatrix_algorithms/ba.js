function beautiful_arrangements(num) {
	var i = 1
	var combs_list = combinations(i,num)
	console.log("Final Combinations",combs_list)
} 

function combinations(n,range) {
	var multiples_list =[],divisors_list = [],temp = [],div_list = [],mul_list = []
	if (n > range) {
		return []
	}
	for (var j = 1; j <= range; j++) {
		if((n % j) == 0) {
			// divisors_list = combinations(n + 1,range)
			var temp = []
			temp[j - 1] = n 
			div_list.push(temp)
			divisors_list.push(j - 1)
		}
		 //console.log("Div List",n,div_list)
		if((n * j) <= range) {
			//multiples_list = combinations(n + 1,range)
			var temp2 = []
			temp2[(n * j) - 1] = n
			mul_list.push(temp2)
			multiples_list.push((n * j) - 1)
		}
		//console.log("Mul List",n,mul_list)
	}

	var result = combinations(n + 1, range)
	 // console.log("Formed div's ",result[0])
	 // console.log("Formed mul's ",result[1])

	if(result.length) {
		debugger
		for (var k = 0; k < result[0].length; k++) {
			for (var l = 0; l < divisors_list.length; l++) {
				
				result[0][k][divisors_list[l]] = n 
				console.log("divisors",divisors_list[l],result[0[k]])
			}
		}
		for (var k = 0; k < result[1].length; k++) {
			for (var l = 0; l < multiples_list.length; l++) {
				
				result[1][k][n - 1] = multiples_list[l] 
				console.log("multiples list",multiples_list[l],result[1][k])
			}
		}
	}
	 else {
	 	result[0] = div_list
	 	result[1] = mul_list
	 }
	console.log("Result for",n,result)
	//console.log("Divisors and multiples list for ",divisors_list,multiples_list,n)
	return [result[0],result[1]]
}


beautiful_arrangements(3)


