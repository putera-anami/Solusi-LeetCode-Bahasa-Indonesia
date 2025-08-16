/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) { // fungsi anonim yang menerima parameter num, lalu disimpan ke variabel addDigits.
    if(num < 10) { // jika sudah 1 digit,
        return num; // kembalikan nilai num.
    }
    else if (num % 9 === 0) { // jika num dibagi 9 sisa baginya 0,
        return 9; // kembalikan nilai 9.
    }
    else {
        return num % 9; // jika num modulo 9 masih ada sisa, kembalikan nilai sisanya (modulusnya).
    }
};

// Kode di bawah gak perlu copy ke LeetCode.
// console.log(addDigits(52738));
// console.log(addDigits(99));

// Kode di atas pakai rumus digital root *baca lebih lengkap di internet.
// Penjelasan ajaibnya modulo 9: https://www.youtube.com/watch?v=NPkOVBnrRMI