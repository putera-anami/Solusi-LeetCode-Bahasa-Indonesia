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

// Di bawah ini gak perlu di-copy ke LeetCode.
// console.log(countDigits(7));
// console.log(countDigits(121));
// console.log(countDigits(1248));