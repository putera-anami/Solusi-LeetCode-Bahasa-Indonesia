/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowelCount = 0;
    let currentVowelCount = 0;
    const isVowel = (char) => vowels.has(char);

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            currentVowelCount++;
        }
    }
    maxVowelCount = currentVowelCount;

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            currentVowelCount++;
        }
        if (isVowel(s[i - k])) {
            currentVowelCount--;
        }
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
        
        if (maxVowelCount === k) return k;
    }

    return maxVowelCount;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));