/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10);
    }

    return product - sum;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(subtractProductAndSum(234));
// console.log(subtractProductAndSum(4421));