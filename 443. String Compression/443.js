/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writePointer = 0;
    let readPointer = 0;

    while (readPointer < chars.length) {
        let currentChar = chars[readPointer];
        let count = 0;

        while (readPointer < chars.length && chars[readPointer] === currentChar) {
            count++;
            readPointer++;
        }

        chars[writePointer] = currentChar;
        writePointer++;

        if (count > 1) {
            const countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[writePointer] = countStr[i];
                writePointer++;
            }
        }
    }
    
    return writePointer;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));