/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {
        let destroyed = false;

        while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
            const top = stack[stack.length - 1];

            if (Math.abs(top) < Math.abs(asteroid)) {
                stack.pop();
                continue;
            } else if (Math.abs(top) === Math.abs(asteroid)) {
                stack.pop();
            }

            destroyed = true;
            break;
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([3,5,-6,2,-1,4]));