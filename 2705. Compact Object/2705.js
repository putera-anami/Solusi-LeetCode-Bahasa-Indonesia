/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    return Object.entries(obj).reduce((accumulator, [key, value]) => {
        const compactedValue = compactObject(value);
        if (Boolean(compactedValue)) {
            accumulator[key] = compactedValue;
        }
        return accumulator;
    }, {});
};

// Kode di bawah tidak perlu disalin ke LeetCode.
const input1 = [null, 0, false, 1];
const input2 = {"a": null, "b": [false, 1]};
const input3 = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(input1));
console.log(compactObject(input2));
console.log(compactObject(input3));