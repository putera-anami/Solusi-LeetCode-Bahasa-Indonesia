/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));