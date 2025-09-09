/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) { // Fungsi anonim yang menerima parameter nums, lalu disimpan ke variabel runningSum.
    let result = [];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];
        currentSum = currentValue + currentSum;
        result.push(currentSum);
    }

    return result;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(runningSum([1,2,3,4]));
// console.log(runningSum([1,1,1,1,1]));
// console.log(runningSum([1,3,5,7]));

// Perlu ditambahin penjelasan yang lebih lengkap *liat Youtube litCode sebagai sumber.