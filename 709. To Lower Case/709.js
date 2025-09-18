/**
 * @param {string} s
 * @return {string}
 */

// Solusi 1
var toLowerCase = function(s) {
    return s.toLowerCase();
};

// Solusi 2
// var toLowerCase = function(s) {
//     let result = '';
    
//     for (let i = 0; i < s.length; i++) {
//         let charCode = s.charCodeAt(i);
        
//         if (charCode >= 65 && charCode <= 90) {
//             charCode += 32;
//         }
//         result += String.fromCharCode(charCode);
//     }
//     return result;
// };

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log(toLowerCase("Hello"));
// console.log(toLowerCase("here"));
// console.log(toLowerCase("LOVELY"));