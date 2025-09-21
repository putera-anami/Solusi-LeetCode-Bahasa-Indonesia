/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort((a, b) => a - b);

    const a = nums[0];
    const b = nums[1];
    const c = nums[2];

    if (a + b <= c) {
        return "none";
    }

    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(triangleType([3,3,3]));
// console.log(triangleType([3,4,5]));