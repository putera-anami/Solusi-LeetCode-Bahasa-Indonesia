/**
 * @return {Function}
 */
var createHelloWorld = function() { // membuat fungsi anonim yang disimpan ke variabel createHelloWorld. Jika createHelloWorld dipanggil, akan mengembalikan fungi lain.
    
    return function(...args) { // fungsi yang dikembalikan dengan parameter (...args), yang artinya bisa menerima berapa pun jumlah argumen.
        return "Hello World"; // mengembalikan string "Hello World" tidak peduli argumen yang diberikan.
    }
};

// Di bawah ini hint dari LeetCode.
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Di bawah ini gak perlu copy ke LeetCode.
// const f = createHelloWorld(); // membuat variabel f yang memanggil fungsi createHelloWorld. Karena createHelloWorld mengembalikan fungsi, maka f juga merupakan fungsi.
// console.log(f()); // memanggil fungsi f tanpa argumen lalu tampilkan output ke konsol.
// console.log(f(null)); // memanggil fungsi f dengan argumen null lalu tampilkan output ke konsol.
// console.log(f(42)); // memanggil fungsi f dengan argumen 42 lalu tampilkan output ke konsol.