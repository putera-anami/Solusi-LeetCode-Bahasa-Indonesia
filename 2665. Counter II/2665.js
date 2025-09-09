/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) { // Fungsi anonim yang menerima parameter init, lalu disimpan ke variabel createCounter.
    let count = init; // Deklarasi variabel count yang menyimpan value init. Init akan menjadi nilai awal count.
    function increment() { // Fungsi increment.
        return ++count; // Nilai count ditambah terlebih dahulu (pre-increment) lalu dikembalikan.
    }
    function decrement() { // Fungsi decrement.
        return --count; // Nilai count dikurang terlebih dahulu (pre-decrement) lalu dikembalikan.
    }
    function reset() { // Fungsi reset.
        count = init; // Mengembalikan count ke awal (init).
        return count; // Kembalikan nilai count.
    }

    return { // Kembalikan objek.
        increment: increment, // Properti increment (sebelah kiri), memiliki nilai increment (sebelah kanan) yang merupakan fungsi increment.
        decrement: decrement, // Properti decrement (sebelah kiri), memiliki nilai decrement (sebelah kanan) yang merupakan fungsi decrement.
        reset: reset // Properti reset (sebelah kiri), memiliki nilai reset (sebelah kanan) yang merupakan fungsi reset.
    }
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
// let counter = createCounter(5); // Membuat variabel counter yang memanggil fungsi createCounter dengan argumen 10.

// console.log(counter.increment()); // Memanggil fungsi increment tanpa argumen pada objek counter lalu tampilkan output ke konsol.
// console.log(counter.reset()); // Memanggil fungsi reset tanpa argumen pada objek counter lalu tampilkan output ke konsol.
// console.log(counter.decrement()); // Memanggil fungsi decrement tanpa argumen pada objek counter lalu tampilkan output ke konsol.
// Variabel counter di console.log disebut objek karena menyimpan nilai objek dari fungsi createCounter yaitu {increment: increment, decrement: decrement, dan reset: reset}.