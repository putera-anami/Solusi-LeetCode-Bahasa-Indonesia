class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        const listeners = this.events.get(eventName);
        listeners.push(callback);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }

        const listeners = this.events.get(eventName);
        const results = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}

// Di bawah ini kode boilerplate dari LeetCode.
/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// Kode di bawah tidak perlu disalin ke LeetCode.
function simulate(actions, values) {
    const output = [];
    const subscriptions = []; // keep track of returned subscription objects
    let emitter = null;

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const val = values[i];

        if (action === "EventEmitter") {
            emitter = new EventEmitter();
            output.push([]);
        }

        else if (action === "subscribe") {
            const [eventName, funcString] = val;
            const callback = eval(`(${funcString})`);
            const sub = emitter.subscribe(eventName, callback);
            subscriptions.push(sub);
            output.push(["subscribed"]);
        }

        else if (action === "emit") {
            const [eventName, args] = val;
            const result = emitter.emit(eventName, args);
            output.push(["emitted", result]);
        }

        else if (action === "unsubscribe") {
            const [index] = val;
            subscriptions[index].unsubscribe();
            output.push(["unsubscribed", index]);
        }
    }

    console.log(output);
    return output;
}

console.log("Example 1:")
simulate(
    ["EventEmitter", "emit", "subscribe", "subscribe", "emit"],
    [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"], ["firstEvent", "function cb2() { return 6; }"], ["firstEvent"]]
);

console.log("Example 2:")
simulate(
    ["EventEmitter", "subscribe", "emit", "emit"],
    [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]
);

console.log("Example 3:")
simulate(
    ["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"],
    [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]
);

console.log("Example 4:")
simulate(
  ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"],
  [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]
);