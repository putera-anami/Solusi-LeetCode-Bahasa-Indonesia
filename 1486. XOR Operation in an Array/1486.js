/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = 0;

    for (let i = 0; i < n; i++) {
        const nums = start + 2 * i;
        result ^= nums;
    }
    return result;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));