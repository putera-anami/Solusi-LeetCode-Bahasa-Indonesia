/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    for (const char of s) {
        if (char === '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));