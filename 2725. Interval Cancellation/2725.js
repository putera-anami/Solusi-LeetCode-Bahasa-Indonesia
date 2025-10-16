/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);

    const intervalId = setInterval(() => fn(...args), t);

     return function cancelFn() {
        clearInterval(intervalId);
    };
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
const result1 = [];
const fn1 = (x) => x * 2;
const args1 = [4], t1 = 35, cancelTimeMs1 = 190;
const start1 = performance.now();

const log1 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start1);
    result1.push({"time": diff, "returned": fn1(...argsArr)});
};

const cancel1 = cancellable(log1, args1, t1);

setTimeout(() => {
    console.log("Example 1:");
    cancel1();
    console.log(result1);
}, cancelTimeMs1);

const result2 = [];
const fn2 = (x1, x2) => (x1 * x2);
const args2 = [2, 5], t2 = 30, cancelTimeMs2 = 165;
const start2 = performance.now();

const log2 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start2);
    result2.push({"time": diff, "returned": fn2(...argsArr)});
};

const cancel2 = cancellable(log2, args2, t2);

setTimeout(() => {
    console.log("Example 2:");
    cancel2();
    console.log(result2);
}, cancelTimeMs2);

const result3 = [];
const fn3 = (x1, x2, x3) => (x1 + x2 + x3);
const args3 = [5, 1, 3], t3 = 50, cancelTimeMs3 = 180;
const start3 = performance.now();

const log3 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start3);
    result3.push({"time": diff, "returned": fn3(...argsArr)});
};

const cancel3 = cancellable(log3, args3, t3);

setTimeout(() => {
    console.log("Example 3:");
    cancel3();
    console.log(result3);
}, cancelTimeMs3);