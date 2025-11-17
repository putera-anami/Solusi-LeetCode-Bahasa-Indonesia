/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    let lenGcd = gcd(str1.length, str2.length);

    return str1.slice(0, lenGcd);
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));