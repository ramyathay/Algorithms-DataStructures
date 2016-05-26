/* 191. Number of 1 Bits 
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.  */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var output = [],count = 0
    while(n) {
        output.push(n % 2)
        n = Math.floor(n / 2)
    }
    console.log(output)
    for(var i = 0; i < output.length; i++) {
        if(output[i] == 1) {
            count += 1
        }
    }
    return count
};

console.log(hammingWeight(32))
