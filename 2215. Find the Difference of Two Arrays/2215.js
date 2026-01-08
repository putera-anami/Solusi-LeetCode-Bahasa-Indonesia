/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const getDifference = (s1, s2) => {
        const diff = [];
        for (const item of s1) {
            if (!s2.has(item)) {
                diff.push(item);
            }
        }
        return diff;
    };

    const uniqueToNums1 = getDifference(set1, set2);
    const uniqueToNums2 = getDifference(set2, set1);

    return [uniqueToNums1, uniqueToNums2];
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(findDifference([1,2,3], [2,4,6]));
console.log(findDifference([1,2,3,3], [1,1,2,2]));