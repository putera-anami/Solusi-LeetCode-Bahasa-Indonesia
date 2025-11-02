/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    } 
    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];  
        } else {
            result[arr2[i].id] = arr2[i];
        }
    } 

    return Object.values(result);
};

// Kode di bawah tidak perlu disalin ke LeetCode.
const arr1_ex1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 }
];
const arr2_ex1 = [
    { id: 3, x: 5 }
];
console.log("Example 1:", JSON.stringify(join(arr1_ex1, arr2_ex1), null, 2));

const arr1_ex2 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 }
];
const arr2_ex2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 }
];
console.log("Example 2:", JSON.stringify(join(arr1_ex2, arr2_ex2), null, 2));

const arr1_ex3 = [
    { id: 1, b: { b: 94 }, v: [4, 3], y: 48 }
];
const arr2_ex3 = [
    { id: 1, b: { c: 84 }, v: [1, 3] }
];
console.log("Example 3:", JSON.stringify(join(arr1_ex3, arr2_ex3), null, 2));