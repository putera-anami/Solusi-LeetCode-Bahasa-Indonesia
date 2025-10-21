var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.cache.has(key);

    if (exists) {
        clearTimeout(this.cache.get(key).timerId);
    }

    const timerId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
        value: value,
        timerId: timerId
    });

    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }

    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log("Example 1");

const example1Actions = [
    { delay: 0, action: 'TimeLimitedCache', args: [] },
    { delay: 0, action: 'set', args: [1, 42, 100] },
    { delay: 50, action: 'get', args: [1] },
    { delay: 50, action: 'count', args: [] },
    { delay: 150, action: 'get', args: [1] }
];

let cache1;
let currentTime1 = 0;

example1Actions.forEach(item => {
    const actualDelay = item.delay - currentTime1;
    currentTime1 = item.delay;

    setTimeout(() => {
        let result;
        const t = item.delay;
        const action = item.action;
        const args = item.args;

        if (action === "TimeLimitedCache") {
            cache1 = new TimeLimitedCache();
            result = null;
        } else if (action === "set") {
            result = cache1.set(...args);
        } else if (action === "get") {
            result = cache1.get(...args);
        } else if (action === "count") {
            result = cache1.count();
        }

        const logMessage = `t=${t}, Action: ${action}(${args.join(', ')}), Output: ${result}`;
        console.log(logMessage);
    }, actualDelay);
});

console.log("Example 2");

const example2Actions = [
    { delay: 0, action: 'TimeLimitedCache', args: [] },
    { delay: 0, action: 'set', args: [1, 42, 50] },
    { delay: 40, action: 'set', args: [1, 50, 100] },
    { delay: 50, action: 'get', args: [1] },
    { delay: 120, action: 'get', args: [1] },
    { delay: 200, action: 'get', args: [1] },
    { delay: 250, action: 'count', args: [] }
];

let cache2;
let currentTime2 = 0;

example2Actions.forEach(item => {
    const actualDelay = item.delay - currentTime2;
    currentTime2 = item.delay;

    setTimeout(() => {
        let result;
        const t = item.delay;
        const action = item.action;
        const args = item.args;

        if (action === "TimeLimitedCache") {
            cache2 = new TimeLimitedCache();
            result = null;
        } else if (action === "set") {
            result = cache2.set(...args);
        } else if (action === "get") {
            result = cache2.get(...args);
        } else if (action === "count") {
            result = cache2.count();
        }

        const logMessage = `t=${t}, Action: ${action}(${args.join(', ')}), Output: ${result}`;
        console.log(logMessage);
    }, actualDelay);
});