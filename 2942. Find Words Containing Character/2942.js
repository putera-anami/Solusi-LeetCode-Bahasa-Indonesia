/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }
    return result;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// const words1 = ["leet", "code"];
// const x1 = "e";

// const words2 = ["abc", "bcd", "aaaa", "cbc"];
// const x2 = "a";

// const words3 = ["abc", "bcd", "aaaa", "cbc"];
// const x3 = "z";

// console.log(findWordsContaining(words1, x1));
// console.log(findWordsContaining(words2, x2));
// console.log(findWordsContaining(words3, x3));