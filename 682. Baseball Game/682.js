/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    
    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];
        
        if (op === "C") {
            stack.pop();
        } else if (op === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (op === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(Number(op));
        }
    }
    
    return stack.reduce((total, score) => total + score, 0);
};

// Kode di bawah tidak perlu disalin ke LeetCode.
console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
console.log(calPoints(["1","C"]));