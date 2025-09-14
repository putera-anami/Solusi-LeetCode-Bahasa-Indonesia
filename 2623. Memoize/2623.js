/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    }
}

// Di bawah ini kode boilerplate dari LeetCode.
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
// let callCountSum = 0;
// const memoizedSum = memoize(function (a, b) {
//     callCountSum += 1;
//     return a + b;
// });

// console.log("sum");
// console.log(memoizedSum(2, 2));
// console.log(memoizedSum(2, 2));
// console.log(callCountSum);
// console.log(memoizedSum(1, 2));
// console.log(callCountSum);

// let callCountFactorial = 0;
// const memoizedFactorial = memoize(function (a) {
//     callCountFactorial += 1;
//     let result = 1;
//     for (let i = 1; i <= a; i++) {
//         result *= i;
//     }
//     return result;
// });

// console.log("factorial");
// console.log(memoizedFactorial(2));
// console.log(memoizedFactorial(3));
// console.log(memoizedFactorial(2));
// console.log(callCountFactorial);
// console.log(memoizedFactorial(3));
// console.log(callCountFactorial);