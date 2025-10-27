/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) return -1;
    return this[this.length - 1];
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
const array1 = [null, {}, 3];
console.log(array1.last());

const array2 = [];
console.log(array2.last());