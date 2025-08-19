/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) { // Fungsi anonim yang menerima parameter n, lalu disimpan ke variabel createCounter.
    
    return function() { // Fungsi yang dikembalikan.
        return n++; // Kembalikan nilai n++, yaitu nilai n lalu ditambah 1 setiap iterasinya.
    };
};

// Di bawah ini kode boilerplate dari LeetCode.
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Di bawah ini gak perlu copy ke LeetCode.
// const counter = createCounter(10); // Membuat variabel counter yang memanggil fungsi createCounter dengan argumen 10.
// console.log(counter()); // Memanggil fungsi counter tanpa argumen lalu tampilkan output ke konsol.
// console.log(counter()); // Memanggil fungsi counter tanpa argumen lalu tampilkan output ke konsol.
// console.log(counter()); // Memanggil fungsi counter tanpa argumen lalu tampilkan output ke konsol.