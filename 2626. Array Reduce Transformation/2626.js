/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init;
    for (let i of nums) {
        res = fn(res, i);
    }
    return res;
};

// Di bawah ini gak perlu copy ke LeetCode.
// const nums = [1, 2, 3, 4];
// const fn = (acc, curr) => acc + curr;
// const init = 0;

// const result = reduce(nums, fn, init);
// console.log(result);