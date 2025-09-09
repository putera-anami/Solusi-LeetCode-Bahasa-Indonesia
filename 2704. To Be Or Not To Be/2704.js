/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(i) {
            if (val === i) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(i) {
            if (val !== i) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },

    }
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Kode di bawah tidak perlu disalin ke LeetCode.

// Case yang menghasilkan nilai true.
// console.log(expect(5).toBe(5));
// console.log(expect(5).notToBe(4));

// Case yang menghasilkan error.
// console.log(expect(5).toBe(1));
// console.log(expect(5).notToBe(5));