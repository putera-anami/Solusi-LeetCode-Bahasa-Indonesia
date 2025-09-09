// Hilangin komen kalo mau jalanin di lokal.
// Definition for a binary tree node.
// function TreeNode(val, left, right) { // Konstruktor untuk membuat objek TreeNode yang merepresentasikan sebuah simpul (node) dalam pohon biner.
//      this.val = (val===undefined ? 0 : val) // Nilai yang disimpan dalam simpul tersebut. Jika tidak diberikan nilai (undefined), maka nilai default-nya adalah 0.
//      this.left = (left===undefined ? null : left) // Menyimpan referensi ke anak kiri dari simpul. Jika tidak diberikan, maka anak kiri akan null.
//      this.right = (right===undefined ? null : right) // Menyimpan referensi ke anak kanan dari simpul. Jika tidak diberikan, maka anak kanan akan null.
//  }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) { // Fungsi anonim yang menerima parameter root, lalu disimpan ke variabel checkTree.
    return root.val === root.left.val + root.right.val; // Melakukan pengecekan untuk memastikan apakah nilai dari node akar (root.val) sama dengan jumlah dari nilai anak kiri (root.left.val) dan anak kanan (root.right.val).
};

// Kode di bawah tidak perlu disalin ke LeetCode.
// let leftChild = new TreeNode(4); // Membuat node dengan nilai 4.
// let rightChild = new TreeNode(6); // Membuat node dengan nilai 6.
// let root = new TreeNode(10, leftChild, rightChild); // Membuat node akar dengan nilai 10, yang memiliki anak leftChild dan rightChild.

// console.log(checkTree(root)); // Memanggil fungsi checkTree dengan argumen root lalu tampilkan output ke konsol.