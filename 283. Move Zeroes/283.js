/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }

    return insertPos;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
const array1 = [0,1,0,3,12];
moveZeroes(array1);
console.log(array1);

const array2 = [0];
moveZeroes(array2);
console.log(array2);