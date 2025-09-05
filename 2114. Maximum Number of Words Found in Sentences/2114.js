/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(' ');
        const currentWordCount = words.length;
        if (currentWordCount > maxWords) {
            maxWords = currentWordCount;
        }
    }
    return maxWords;
};

// Di bawah ini gak perlu di-copy ke LeetCode.
// let firstSentence = mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
// let secondSentence = mostWordsFound(["please wait", "continue to fight", "continue to win"]);

// console.log(firstSentence);
// console.log(secondSentence);