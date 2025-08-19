/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) { // Fungsi anonim yang menerima parameter num, lalu disimpan ke variabel addDigits.
    if(num < 10) { // Jika sudah 1 digit,
        return num; // kembalikan nilai num.
    }
    else if (num % 9 === 0) { // Jika num dibagi 9 sisa baginya 0,
        return 9; // kembalikan nilai 9.
    }
    else {
        return num % 9; // Jika num modulo 9 masih ada sisa, kembalikan nilai sisanya (modulusnya).
    }
};

// Kode di bawah gak perlu copy ke LeetCode.
// console.log(addDigits(52738)); // Memanggil fungsi addDigits dengan argumen 52738 lalu tampilkan output ke konsol.
// console.log(addDigits(99)); // Memanggil fungsi addDigits dengan argumen 99 lalu tampilkan output ke konsol.

// Kode di atas pakai rumus digital root *baca lebih lengkap di internet.
// Penjelasan ajaibnya modulo 9: https://www.youtube.com/watch?v=NPkOVBnrRMI