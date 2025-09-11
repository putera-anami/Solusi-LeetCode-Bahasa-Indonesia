/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++;
        }
    }
    return count;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2));
// console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2], 6));