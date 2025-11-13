class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

// Kode di bawah tidak perlu disalin ke LeetCode.
function run(actions, values) {
  let obj = null;
  let output = null;

  try {
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const value = values[i];

      if (action === "Calculator") {
        obj = new Calculator(value);
      } else if (action === "add") {
        obj.add(value);
      } else if (action === "subtract") {
        obj.subtract(value);
      } else if (action === "multiply") {
        obj.multiply(value);
      } else if (action === "divide") {
        obj.divide(value);
      } else if (action === "power") {
        obj.power(value);
      } else if (action === "getResult") {
        output = obj.getResult();
      }
    }
    console.log(output);
  } catch (err) {
    console.log(err.message);
  }
}

run(["Calculator", "add", "subtract", "getResult"], [10, 5, 7]); 
run(["Calculator", "multiply", "power", "getResult"], [2, 5, 2]); 
run(["Calculator", "divide", "getResult"], [20, 0]);