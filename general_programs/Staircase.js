function StairCase(n) {
    var output = "",k = 0
    for(var i = 1 ; i < n; i++) {
        for(var j = n - i; j <= n ; j ++) {
            while(k < j) {
                output += "\t"
                k++
            }
            output += "#"
        }
        console.log(output)
        output = ""
        k = 0
    }

}

StairCase(6)