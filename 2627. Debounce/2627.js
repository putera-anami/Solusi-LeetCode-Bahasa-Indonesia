/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, t)
    }
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
// console.log("Example 1");
// const t1 = 50;
// let start1 = Date.now();
// const log1 = (...inputs) => { 
//     const timeElapsed = Date.now() - start1;
//     console.log(`[${timeElapsed}ms, inputs: [${inputs}]]`);
// };
// const dlog1 = debounce(log1, t1);

// setTimeout(() => {
//     console.log(`[50ms] Panggilan dlog(1)`);
//     dlog1(1);
// }, 50);

// setTimeout(() => {
//     console.log(`[75ms] Panggilan dlog(2)`);
//     dlog1(2);
// }, 75);

// console.log("Example 2");
// const t2 = 20;
// let start2 = Date.now();
// const log2 = (...inputs) => { 
//     const timeElapsed = Date.now() - start2;
//     console.log(`[${timeElapsed}ms, inputs: [${inputs}]]`);
// };
// const dlog2 = debounce(log2, t2);

// setTimeout(() => {
//     console.log(`[50ms] Panggilan dlog(1)`);
//     dlog2(1);
// }, 50);

// setTimeout(() => {
//     console.log(`[100ms] Panggilan dlog(2)`);
//     dlog2(2);
// }, 100);

// console.log("Example 3");
// const t3 = 150;
// let start3 = Date.now();
// const log3 = (...inputs) => { 
//     const timeElapsed = Date.now() - start3;
//     console.log(`[${timeElapsed}ms, inputs: [${inputs}]]`);
// };
// const dlog3 = debounce(log3, t3);

// setTimeout(() => {
//     console.log(`[50ms] Panggilan dlog(1, 2)`);
//     dlog3(1, 2);
// }, 50);

// setTimeout(() => {
//     console.log(`[300ms] Panggilan dlog(3, 4)`);
//     dlog3(3, 4);
// }, 300);

// setTimeout(() => {
//     console.log(`[300ms] Panggilan dlog(5, 6)`);
//     dlog3(5, 6);
// }, 300);