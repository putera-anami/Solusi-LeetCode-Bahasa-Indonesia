/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        }

        const results = new Array(functions.length);
        let resolvedCount = 0;
        let rejected = false;

        functions.forEach((asyncFn, index) => {
            asyncFn()
                .then(value => {
                    if (rejected) return;

                    results[index] = value;
                    resolvedCount++;

                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch(reason => {
                    if (!rejected) {
                        rejected = true;
                        reject(reason);
                    }
                })
        })
    })
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
const functions1 = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
];

promiseAll(functions1)
  .then(data => {
    console.log("Example 1 resolved:", data);
  })
  .catch(error => {
    console.error("Example 1 rejected:", error);
  });

const functions2 = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
];

promiseAll(functions2)
  .then(data => {
    console.log("Example 2 resolved:", data);
  })
  .catch(error => {
    console.error("Example 2 rejected:", error);
  });

const functions3 = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];

promiseAll(functions3)
  .then(data => {
    console.log("Example 3 resolved:", data);
  })
  .catch(error => {
    console.error("Example 3 rejected:", error);
  });