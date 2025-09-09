/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(map([1, 2, 3], (n, i) => n + 1));
// console.log(map([1, 2, 3], (n, i) => n + i));
// console.log(map([10, 20, 30], (n, i) => 42));
// console.log(map([2, 4, 6], (n, i) => n * n));