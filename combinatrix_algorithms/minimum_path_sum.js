var minPathSum = function(grid) {
    var col = grid.length
    var row = grid[0].length
    var result = find_path_sum(grid[0][0],0,0,grid)      
};

function find_path(num,sum_obj,row,col,grid) {
	var right_num = 0,bottom_num = 0
	//console.log(num,sum_obj,row,col)
	var row_col = row.toString() + col.toString()
	if (sum_obj.hasOwnProperty(row_col)) {
		console.log("returning for num",num,sum_obj)
		return sum_obj
	}
	
	//They may exists duplicate numbers, so check against the row and column positions and also store it likewise in the obj
	if ((col == (grid.length - 1)) && (row == (grid[0].length - 1))) {
		sum_obj[row_col] = {
			'r_sum': [row,col],
			'b_sum': [row,col] 
		}
		console.log("returning for",num,sum_obj)
		return sum_obj
	}
	// console.log("Row,col",row,col,grid)
	sum_obj[row_col] = {}

	if (col == (grid.length - 1)) {
		bottom_num = grid[row + 1][col]
		var temp2 = find_path(bottom_num,sum_obj,row + 1,col,grid)
		//console.log("Last Column value",temp2,"for num",num)

		var b_indices = (row + 1).toString() + col.toString()
		temp2[b_indices]['b_sum'].push(row,col)
		
		sum_obj[row_col] = {
			'r_sum': [],
			'b_sum': temp2[b_indices]['b_sum']
		}
		//console.log("After recursive call",num,sum_obj)
	}
	else if (row != (grid.length - 1)){
		right_num = grid[row][col + 1],bottom_num = grid[row + 1][col]
		var tmp = find_path(right_num,sum_obj,row,col + 1,grid)
		var temp2 = find_path(bottom_num,sum_obj,row + 1,col,grid)

		var r_indices = row.toString() + (col + 1).toString()
		var b_indices = (row + 1).toString() + col.toString()
		tmp[r_indices]['r_sum'].push(row,col);
		tmp[r_indices]['b_sum'].push(row,col)
		temp2[b_indices]['r_sum'].push(row,col)
		temp2[b_indices]['b_sum'].push(row,col)

		sum_obj[row_col] = {
			'r_sum': tmp[r_indices]['r_sum'],
			'b_sum': temp2[b_indices]['b_sum']
		}
	}
	else {
		right_num = grid[row][col + 1]
		var tmp = find_path(right_num,sum_obj,row,col + 1,grid)
		//console.log(tmp)
		var r_indices = row.toString() + (col + 1).toString()
		//console.log("R_indices",r_indices,tmp)
		tmp[r_indices]['r_sum'].push(row,col);
		sum_obj[row_col] = {
			'r_sum': tmp[r_indices]['r_sum'],
			'b_sum': []
		}
	}
	return sum_obj
}

function find_path_sum(num,row,col,grid) {
	var right_num = 0,bottom_num = 0
	//console.log(num,sum_obj,row,col

	if ((col == (grid.length - 1)) && (row == (grid[0].length - 1))) {
		return num
	}
	// console.log("Row,col",row,col,grid)

	if (col == (grid.length - 1)) {
		bottom_num = grid[row + 1][col]
		var temp2 = find_path_sum(bottom_num,row + 1,col,grid)
		//console.log("Last Column value",temp2,"for num",num)
		return num + temp2
	}
	else if (row != (grid.length - 1)){
		right_num = grid[row][col + 1],bottom_num = grid[row + 1][col]
		var tmp = find_path(right_num,row,col + 1,grid)
		var temp2 = find_path(bottom_num,row + 1,col,grid)
		return num + tmp,num + temp2
	}
	else {
		right_num = grid[row][col + 1]
		var tmp = find_path(right_num,row,col + 1,grid)
		//console.log(tmp)
		return tmp + num
	}
}



var matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log("Final path is",minPathSum(matrix))
