/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = new Set();

    for (const char of sentence) {
        alphabet.add(char);
    }
    return alphabet.size === 26;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// const firstSentence = checkIfPangram("abcdefghijklmnopqrstuvwxyz");
// const secondSentence = checkIfPangram("abcdefghijklmnopqrstuvwxy");
// const thirdSentence = checkIfPangram("thequickbrownfoxjumpsoverthelazydog");

// console.log(firstSentence);
// console.log(secondSentence);
// console.log(thirdSentence);