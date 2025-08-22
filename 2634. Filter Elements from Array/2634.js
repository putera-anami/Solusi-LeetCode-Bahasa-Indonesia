/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

// Di bawah ini gak perlu copy ke LeetCode.
// console.log(filter([0,10,20,30], (n, i) => n > 10));
// console.log(filter([1, 2, 3], (n, i) => i === 0));
// console.log(filter([-2,-1,0,1,2], (n, i) => n + 1));