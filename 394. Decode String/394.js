/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currStr = '';
    let currNum = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            currNum = currNum * 10 + Number(char);
        } else if (char === '[') {
            stack.push([currStr, currNum]);
            currStr = '';
            currNum = 0;
        } else if (char === ']') {
            let [prevStr, num] = stack.pop();
            currStr = prevStr + currStr.repeat(num);
        } else {
            currStr += char;
        }
    }

    return currStr;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));