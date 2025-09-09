/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));
// console.log(firstPalindrome(["notapalindrome","racecar"]));
// console.log(firstPalindrome(["def","ghi"]));