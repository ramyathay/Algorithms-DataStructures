var _ = require('underscore')



function beautiful_arrangements(num) {
	var list = [],result = [],j = 0,divisor = [],multiple = []
	for(var i = 1; i <= num ; i++) {
		var current_pos = [i]
		var combs_list = combinations(i,num)
		result = _.union(combs_list[0],combs_list[1])
		console.log("possible combination elements for",i,result)
	}
} 


function combinations(n,range) {
	var multiples_list = [],divisors_list = []
	for (var j = 1; j <= range; j++) {
		if((n % j) == 0) {
			divisors_list.push(j)
		}
		if((n * j) <= range) {
			multiples_list.push((n * j))
		}
	}
	return [divisors_list,multiples_list]

}


beautiful_arrangements(3)