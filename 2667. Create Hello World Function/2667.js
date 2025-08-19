/**
 * @return {Function}
 */
var createHelloWorld = function() { // Fungsi anonim yang disimpan ke variabel createHelloWorld. Jika createHelloWorld dipanggil, akan mengembalikan fungi lain.
    
    return function(...args) { // Fungsi yang dikembalikan dengan parameter (...args), yang artinya bisa menerima berapa pun jumlah argumen.
        return "Hello World"; // Mengembalikan string "Hello World" tidak peduli argumen yang diberikan.
    }
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Di bawah ini gak perlu copy ke LeetCode.
// const f = createHelloWorld(); // Membuat variabel f yang memanggil fungsi createHelloWorld. Karena createHelloWorld mengembalikan fungsi, maka f juga merupakan fungsi.
// console.log(f()); // Memanggil fungsi f tanpa argumen lalu tampilkan output ke konsol.
// console.log(f(null)); // Memanggil fungsi f dengan argumen null lalu tampilkan output ke konsol.
// console.log(f(42)); // Memanggil fungsi f dengan argumen 42 lalu tampilkan output ke konsol.