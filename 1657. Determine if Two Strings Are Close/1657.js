/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const countFreq = (word) => {
        const freqMap = new Map();
        for (const char of word) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }
        return freqMap;
    };

    const freq1 = countFreq(word1);
    const freq2 = countFreq(word2);

    if (freq1.size !== freq2.size) {
        return false;
    }
    for (const char of freq1.keys()) {
        if (!freq2.has(char)) {
            return false;
        }
    }

    const sortedFreqs1 = Array.from(freq1.values()).sort((a, b) => a - b);
    const sortedFreqs2 = Array.from(freq2.values()).sort((a, b) => a - b);

    for (let i = 0; i < sortedFreqs1.length; i++) {
        if (sortedFreqs1[i] !== sortedFreqs2[i]) {
            return false;
        }
    }

    return true;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(closeStrings("abc", "abc"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));