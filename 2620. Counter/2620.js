/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) { // fungsi anonim yang menerima parameter n, lalu disimpan ke variabel createCounter.
    
    return function() { // fungsi yang dikembalikan.
        return n++; // kembalikan nilai n++, yaitu nilai n lalu ditambah 1 setiap iterasinya.
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
// const counter = createCounter(10); // membuat variabel counter yang memanggil fungsi createCounter.
// console.log(counter()); // memanggil fungsi counter tanpa argumen lalu tampilkan output ke konsol.
// console.log(counter()); // memanggil fungsi counter tanpa argumen lalu tampilkan output ke konsol.
// console.log(counter()); // memanggil fungsi counter tanpa argumen lalu tampilkan output ke konsol.