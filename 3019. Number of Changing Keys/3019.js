/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let changes = 0;

    const lowerS = s.toLowerCase();

    for (let i = 1; i < lowerS.length; i++) {
        if (lowerS[i] !== lowerS[i - 1]) {
            changes++;
        }
    }
    return changes;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(countKeyChanges("aAbBcC"));
console.log(countKeyChanges("AaAaAaaA"));