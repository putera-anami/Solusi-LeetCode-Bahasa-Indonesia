/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => fn(...args), t);

    return function cancelFn() {
        clearTimeout(timer);
    };
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
const result1 = [];
const fn1 = (x) => x * 5;
const args1 = [2];
const t1 = 20;
const cancelTimeMs1 = 50;

const start1 = performance.now();

const log1 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start1);
    result1.push({ "time": diff, "returned": fn1(...argsArr) });
};

const cancel1 = cancellable(log1, args1, t1);

setTimeout(cancel1, cancelTimeMs1);

setTimeout(() => console.log(result1), 70);

const result2 = [];
const fn2 = (x) => x**2;
const args2 = [2];
const t2 = 100;
const cancelTimeMs2 = 50;

const start2 = performance.now();

const log2 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start2);
    result2.push({ "time": diff, "returned": fn2(...argsArr) });
};

const cancel2 = cancellable(log2, args2, t2);

setTimeout(cancel2, cancelTimeMs2);

setTimeout(() => console.log(result2), 120);

const result3 = [];
const fn3 = (x1, x2) => x1 * x2;
const args3 = [2, 4];
const t3 = 30;
const cancelTimeMs3 = 100;

const start3 = performance.now();

const log3 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start3);
    result3.push({ "time": diff, "returned": fn3(...argsArr) });
};

const cancel3 = cancellable(log3, args3, t3);

setTimeout(cancel3, cancelTimeMs3);

setTimeout(() => console.log(result3), 120);
