/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

// Cara 1
var argumentsLength = function(...args) {
    return args.length;
};

// Cara 2
// var argumentsLength = function(...args) {
//     let count = 0;
//     for (let i=0; i < args.length; i++) {
//         count++;
//     }
//     return count;
// };

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * argumentsLength(1, 2, 3); // 3
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(argumentsLength(5));
// console.log(argumentsLength({}, null, "3"));