/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        elementSum += num;

        let tempNum = num;
        while (tempNum > 0) {
            digitSum += tempNum % 10;
            tempNum = Math.floor(tempNum / 10);
        }
    }
    return elementSum - digitSum;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(differenceOfSum([1,15,6,3]));
// console.log(differenceOfSum([1,2,3,4]));