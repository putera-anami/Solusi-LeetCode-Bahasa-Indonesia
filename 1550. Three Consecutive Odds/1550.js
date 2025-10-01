/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let consecutiveOddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            consecutiveOddCount++;
        } else {
            consecutiveOddCount = 0;
        }

        if (consecutiveOddCount === 3) {
            return true;
        }
    }

    return false;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(threeConsecutiveOdds([2,6,4,1]));
// console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));