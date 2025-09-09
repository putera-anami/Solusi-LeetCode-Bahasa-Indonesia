/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        for (let fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
// const f = x => x + 1;
// const g = x => x * x;
// const h = x => 2 * x;
// const composed = compose([f, g, h]);

// console.log(composed(4));