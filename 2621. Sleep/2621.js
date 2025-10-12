/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

// Di bawah ini kode boilerplate dari LeetCode.
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
let t = Date.now();

sleep(100).then(() => console.log(Date.now() - t));
sleep(200).then(() => console.log(Date.now() - t));