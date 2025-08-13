// Hilangin komen kalo mau jalanin di lokal.
// Definition for a binary tree node.
// function TreeNode(val, left, right) { //konstruktor untuk membuat objek TreeNode yang merepresentasikan sebuah simpul (node) dalam pohon biner.
//      this.val = (val===undefined ? 0 : val) //nilai yang disimpan dalam simpul tersebut. Jika tidak diberikan nilai (undefined), maka nilai default-nya adalah 0.
//      this.left = (left===undefined ? null : left) //menyimpan referensi ke anak kiri dari simpul. Jika tidak diberikan, maka anak kiri akan null.
//      this.right = (right===undefined ? null : right) //menyimpan referensi ke anak kanan dari simpul. Jika tidak diberikan, maka anak kanan akan null.
//  }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) { // fungsi bernama checkTree yang menerima parameter root.
    return root.val === root.left.val + root.right.val; // melakukan pengecekan untuk memastikan apakah nilai dari node akar (root.val) sama dengan jumlah dari nilai anak kiri (root.left.val) dan anak kanan (root.right.val).
};

// Di bawah ini gak perlu copy ke LeetCode
// let leftChild = new TreeNode(4); //membuat node dengan nilai 4.
// let rightChild = new TreeNode(6); //membuat node dengan nilai 6.
// let root = new TreeNode(10, leftChild, rightChild); //membuat node akar dengan nilai 10, yang memiliki anak leftChild dan rightChild.

// console.log(checkTree(root)); //memanggil fungsi checkTree dengan argumen root lalu tampilkan output ke konsol.