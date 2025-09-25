/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;
    let pos = n - 1;

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        pos--;
    }

    return result;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(sortedSquares([-4,-1,0,3,10]));
// console.log(sortedSquares([-7,-3,2,3,11]));