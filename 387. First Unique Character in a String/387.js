/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCounts = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCounts[char] = charCounts[char] + 1 || 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCounts[char] === 1) {
            return i;
        }
    }
    return -1;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));
// console.log(firstUniqChar("aabb"));