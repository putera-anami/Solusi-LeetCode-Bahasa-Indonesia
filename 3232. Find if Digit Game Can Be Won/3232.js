/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let sumSingleDigit = 0;
    let sumDoubleDigit = 0;
    let totalSum = 0;

    for (let num of nums) {
        if (num >= 0 && num < 10) {
            sumSingleDigit += num;
        } else if (num >= 10 && num < 100) {
            sumDoubleDigit += num;
        }
        totalSum += num;
    }

    if (sumSingleDigit > (totalSum - sumSingleDigit)) {
        return true;
    }

    if (sumDoubleDigit > (totalSum - sumDoubleDigit)) {
        return true;
    }

    return false;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(canAliceWin([1,2,3,4,10]));
console.log(canAliceWin([1,2,3,4,5,14]));
console.log(canAliceWin([5,5,5,25]));