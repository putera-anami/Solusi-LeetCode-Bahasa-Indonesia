/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    arr.sort((a, b) => fn(a) - fn(b));
    return arr;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;
const sortedArr1 = sortBy(arr1, fn1);
console.log(sortedArr1);

const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}];
const fn2 = (d) => d.x;
const sortedArr2 = sortBy(arr2, fn2);
console.log(sortedArr2);

const arr3 = [[3, 4], [5, 2], [10, 1]];
const fn3 = (x) => x[1];
const sortedArr3 = sortBy(arr3, fn3);
console.log(sortedArr3);