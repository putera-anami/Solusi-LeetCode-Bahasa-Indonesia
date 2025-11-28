/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const trimmedString = s.trim();
    const wordsArray = trimmedString.split(/\s+/);
    wordsArray.reverse();
    return wordsArray.join(' ');
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));