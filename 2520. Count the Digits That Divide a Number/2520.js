/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let strNum = num.toString();

    for (let char of strNum) {
        let digit = parseInt(char);
        if (digit !== 0 && num % digit === 0) {
            count++;
        }
    }

    return count;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(countDigits(7));
// console.log(countDigits(121));
// console.log(countDigits(1248));