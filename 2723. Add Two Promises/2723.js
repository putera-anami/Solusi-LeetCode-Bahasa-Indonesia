/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const val1 = await promise1;
    const val2 = await promise2;
    return val1 + val2;
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
// const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
// const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

// addTwoPromises(promise1, promise2).then(result => {
//     console.log(result);
// });

// const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
// const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

// addTwoPromises(promise3, promise4).then(result => {
//     console.log(result);
// });

// Di konsol bisa jadi lebih dulu selesai yang promise3 + promise4 dibanding promise1 + promise2. Jika ingin mengubah hasil konsol tinggal ganti waktu delay-nya.