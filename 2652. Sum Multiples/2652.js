/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(sumOfMultiples(7));
// console.log(sumOfMultiples(10));
// console.log(sumOfMultiples(9));