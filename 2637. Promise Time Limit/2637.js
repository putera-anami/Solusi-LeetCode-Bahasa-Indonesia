/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutId);
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timeoutId);
                    reject(error);
                });
        })
    }
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
const fn1 = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
};
const inputs1 = [5];
const t1 = 50;
const limited1 = timeLimit(fn1, t1);

(async () => {
    const start = performance.now();
    let result;
    try {
        const res = await limited1(...inputs1);
        result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
        result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    console.log("Example 1:");
    console.log(result);
})();

const fn2 = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
};
const inputs2 = [5];
const t2 = 150;
const limited2 = timeLimit(fn2, t2);

(async () => {
    const start = performance.now();
    let result;
    try {
        const res = await limited2(...inputs2);
        result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
        result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    console.log("Example 2:");
    console.log(result);
})();

const fn3 = async (a, b) => { 
    await new Promise(res => setTimeout(res, 120)); 
    return a + b; 
};
const inputs3 = [5, 10];
const t3 = 150;
const limited3 = timeLimit(fn3, t3);

(async () => {
    const start = performance.now();
    let result;
    try {
        const res = await limited3(...inputs3);
        result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
        result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    console.log("Example 3:");
    console.log(result);
})();

const fn4 = async () => { 
    throw "Error";
};
const inputs4 = [];
const t4 = 1000;
const limited4 = timeLimit(fn4, t4);

(async () => {
    const start = performance.now();
    let result;
    try {
        const res = await limited4(...inputs4);
        result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
        result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    console.log("Example 4:");
    console.log(result);
})();