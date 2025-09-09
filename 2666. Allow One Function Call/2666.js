/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function(...args){
        if (called) {
            return undefined;
        }
        called = true;
        return fn (...args);
    }
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
// function sum(a, b, c) {
//   return a + b + c;
// }

// const onceSum = once(sum);

// console.log(onceSum(1, 2, 3));
// console.log(onceSum(4, 5, 6));
// console.log(onceSum(7, 8, 9));